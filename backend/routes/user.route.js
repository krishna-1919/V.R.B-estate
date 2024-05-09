import express from 'express';
import { deleteUser, test, updateUser,  getUserListings, getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);// to update the user .
router.delete('/delete/:id', verifyToken, deleteUser);// to delete user 
router.get('/listings/:id', verifyToken, getUserListings);// get the all listings in profille to show user 
router.get('/:id', verifyToken, getUser);  // this is use for get the user data to send email to owner 


export default router;