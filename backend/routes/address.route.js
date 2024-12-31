import express from 'express';
import { saveAddress, getAddresses, deleteAddress } from '../controller/addressController.js'; // Importing from the controller

const router = express.Router();

// POST route to save address
router.post('/save', saveAddress);

// GET route to fetch saved addresses
router.get('/get', getAddresses);

router.delete('/delete/:id', deleteAddress);

export default router;
