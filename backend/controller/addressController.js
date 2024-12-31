// controller/addressController.js
import Address from '../models/Address.js';

// Save address
export const saveAddress = async (req, res) => {
  try {
    const { houseStreet, city, addressType } = req.body;
    const newAddress = new Address({
      houseStreet,
      city,
      addressType,
    });

    await newAddress.save();
    res.status(201).json({ message: 'Address saved successfully', address: newAddress });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get addresses
export const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const deleteAddress = async (req, res) => {
  const { id } = req.params;

  try {
    const address = await Address.findByIdAndDelete(id);

    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete address', error: error.message });
  }
};