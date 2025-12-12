const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  phoneNumber: { type: String, required: true, trim: true },
  emailAddress: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 10 }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
