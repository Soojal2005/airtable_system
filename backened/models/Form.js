const mongoose = require('mongoose');

const conditionSchema = new mongoose.Schema({
  fieldId: String,
  operator: String,
  value: mongoose.Schema.Types.Mixed
});

const fieldSchema = new mongoose.Schema({
  fieldId: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  conditions: conditionSchema
});

const formSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  baseId: {
    type: String,
    required: true
  },
  tableId: {
    type: String,
    required: true
  },
  fields: [fieldSchema],
  published: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Form', formSchema);