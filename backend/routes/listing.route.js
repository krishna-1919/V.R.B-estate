import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);// for creat a listing
router.delete('/delete/:id', verifyToken, deleteListing); // delete listing
router.post('/update/:id', verifyToken, updateListing); //for update listing
router.get('/get/:id', getListing); // this is for get the one listing data to show to what to update in update route  and to get the one listing data one time after show the data or simple get the from this api after entring the listing id 
router.get('/get', getListings); // this is search data can give to fronted


export default router;
