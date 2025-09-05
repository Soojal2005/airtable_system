const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  airtableId: {
    type: String,
    required: true,
    unique: true
  },
  accessToken: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  bases: [{
    id: String,
    name: String,
    tables: [{
      id: String,
      name: String,
      fields: [{
        id: String,
        name: String,
        type: String
      }]
    }]
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);