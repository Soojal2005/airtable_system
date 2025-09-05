const express = require('express');
const router = express.Router();

// POST /api/auth - Authenticate user
router.post('/', (req, res) => {
  res.json({ message: 'Auth endpoint working' });
});

module.exports = router;