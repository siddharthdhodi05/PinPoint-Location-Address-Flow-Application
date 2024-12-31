// models/Address.js

import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  houseStreet: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  addressType: {
    type: String,
    enum: ['home', 'office', 'family'],
    required: true,
  },
});

const Address = mongoose.model('Address', addressSchema);

export default Address;  // Ensure you're using `export default`
