import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// router.get("/signup",(req,res)=>{
//     res.json({
//         data: "you hit the signup endpoint"
//     });
// });

router.post("/signup",signup);

router.post("/logout",logout);

router.post("/login",login);

export default router;