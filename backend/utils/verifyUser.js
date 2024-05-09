 import jwt from 'jsonwebtoken'; 
import { errorHandler } from './error.js'; 
import { signOut } from '../controllers/auth.controller.js';


// this verifytoken is use for check to user are same or not if currentuser and any task they are complenting to ckheck user are same or not 
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) return next(errorHandler(401, 'Error - sorry your session is expired you have relogin in the page '));  


   
  

  // jwt is help to check user are same or not  and jwt also save the data in token or web server in cookies. 
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden')); 
 
    req.user = user; // this is use for check to user are same or not!  cookies will get the user automatically and send to next in updateuser controller to check cookie user and api sent user id is same or not 

    next();
  });
};