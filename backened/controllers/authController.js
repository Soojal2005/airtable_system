const User = require('../models/User');
const AirtableService = require('../Services/airtableService');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

exports.authenticate = async (req, res, next) => {
  try {
    const { accessToken } = req.body;

    // Verify the token by making a simple request to Airtable
    const airtableService = new AirtableService(accessToken);
    const bases = await airtableService.getBases();

    // Get user info from Airtable (pseudo-code - actual implementation may vary)
    // This would typically come from OAuth flow
    const userInfo = {
      id: 'airtable_user_id', // This would come from OAuth
      email: 'user@example.com', // This would come from OAuth
      name: 'Airtable User' // This would come from OAuth
    };

    // Find or create user
    let user = await User.findOne({ airtableId: userInfo.id });
    
    if (!user) {
      user = new User({
        airtableId: userInfo.id,
        accessToken,
        email: userInfo.email,
        name: userInfo.name,
        bases: []
      });
    } else {
      user.accessToken = accessToken;
    }

    // Fetch user's bases and schema
    for (const base of bases) {
      try {
        const tables = await airtableService.getBaseSchema(base.id);
        user.bases.push({
          id: base.id,
          name: base.name,
          tables: tables.map(table => ({
            id: table.id,
            name: table.name,
            fields: table.fields
              .filter(field => 
                ['singleLineText', 'multilineText', 'multipleSelects', 'singleSelect', 'multipleAttachments'].includes(field.type)
              )
              .map(field => ({
                id: field.id,
                name: field.name,
                type: this.mapFieldType(field.type)
              }))
          }))
        });
      } catch (error) {
        console.error(`Failed to fetch schema for base ${base.id}:`, error);
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.mapFieldType = (airtableType) => {
  const typeMap = {
    'singleLineText': 'Short text',
    'multilineText': 'Long text',
    'singleSelect': 'Single select',
    'multipleSelects': 'Multi select',
    'multipleAttachments': 'Attachment'
  };
  
  return typeMap[airtableType] || airtableType;
};