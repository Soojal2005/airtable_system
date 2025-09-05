const express = require('express');
const router = express.Router();

// GET /api/forms - Get all forms
router.get('/', (req, res) => {
  res.json({ message: 'Forms endpoint working' });
});

// POST /api/forms - Create a new form
router.post('/', (req, res) => {
  res.json({ message: 'Create form endpoint working' });
});

module.exports = router;