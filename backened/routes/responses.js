const express = require('express');
const router = express.Router();

// POST /api/responses - Submit form response
router.post('/', (req, res) => {
  res.json({ message: 'Responses endpoint working' });
});

module.exports = router;