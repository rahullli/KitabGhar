import { NextFunction, Response, Router } from "express";

import * as authController from "../controllers/authController";
import passport from "passport";
import { IUser } from "../models/User";
import { generateToken } from "../utils/generateToken";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/verify-email/:token", authController.verifyEmail);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);
router.get("/logout", authController.logout);

router.get("/google", passport.authenticate('google', {
    scope: ["profile", "email"]
}))

// Google callback route 
router.get("/google/callback", passport.authenticate('google', {
    failureRedirect: `${process.env.FRONTEND_URL}`, 
    session: false
}), 

async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
    try{
        const user = req.user as IUser;
        const accessToken = await generateToken(user)
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            // secure: process.env.NODE_ENV !== "development",
            maxAge: 24 * 60 * 60 * 1000,
        });
    }
    catch(err){

    }
}


)

export default router;