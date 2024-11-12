const mongoose = require('mongoose');

const strategySchema = new mongoose.Schema({
  view: { type: String, required: true },
  date: { type: String, required: true },
  strategies: { type: [String], required: true },
});

module.exports = mongoose.model('Strategy', strategySchema);
