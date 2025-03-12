import { Request, Response } from "express";
import User from "../models/User";
import { response } from "../utils/responseHandler";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { sendPasswordResetEmail, sendVerificationEmail } from "../config/emailConfig";
import { generateToken } from "../utils/generateToken";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password, agreeTerms } = req.body;
        console.log("Received request body:", req.body);

        // Validate required fields
        if (!name || !email || !password || agreeTerms === undefined) {
            response(res, 400, "All fields are required.");
            return;
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            response(res, 400, "User already exists");
            return;  // Stop execution
        }

        // Validate password before hashing
        if (typeof password !== "string" || password.trim().length < 6) {
            response(res, 400, "Password must be at least 6 characters.");
            return;
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Generated salt:", salt);
        console.log("Hashed password:", hashedPassword);

        // Generate a verification token
        const verificationToken = crypto.randomBytes(32).toString("hex");

        // Create and save the user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            agreeTerms,
            verificationToken
        });

        await user.save();

        // Send verification email
        await sendVerificationEmail(user.email, verificationToken);
        
        response(res, 201, "User registration successful. Please check your email to verify your account.");
    } catch (error) {
        console.error("Registration Error:", error);
        response(res, 500, "Internal server error");
    }
};


export const verifyEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const { token } = req.params;
        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            response(res, 400, "Invalid verification token.");
            return;
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        const accessToken = generateToken(user);
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            // secure: process.env.NODE_ENV !== "development",
            maxAge: 24 * 60 * 60 * 1000,
        });
        await user.save();

        response(res, 200, "Email verified successfully.");
    }
    catch (error) {
        console.error("Email verification error:", error);
        response(res, 500, "Internal server error during email verification.");
    }
}


export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            response(res, 400, "Invalid email or password.");
            return;
        }

        if(!user.isVerified){
            response(res, 400, "Please verify your email to login.");
            return;
        }

        const accessToken = generateToken(user);
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            // secure: process.env.NODE_ENV !== "development",
            maxAge: 24 * 60 * 60 * 1000,
        });
        response(res, 200, "User Login Successfully.", { user: {name: user.name, email: user.email} });
    }
    catch (error) {
        console.error("Email verification error:", error);
        response(res, 500, "Internal server error during email verification.");
    }
}

export const forgotPassword = async(req:Request, res: Response): Promise<void> => {

    try{
        const {email} = req.body;
        const user = await User.findOne({email: email});
        if(!user){
            response(res,400, "No Account found with this email address");
            return;
        }

        const resetPasswordToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpires = new Date(Date.now() + 3600000);

        await sendPasswordResetEmail(user.email, resetPasswordToken);
        response(res,200,"A Password reset link has been sent to your email address");
        return;
    }
    catch(err){
        console.error(err);
        response(res, 500, "Internal server error, please try again");
    }
}

export const resetPassword = async(req:Request, res:Response): Promise<void> =>{
    try{
        const token = req.params;
        const {newPassword} = req.body;
        const user = await User.findOne({resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()}})
        if(!user){
            response(res,400, "Invalid or expired verification token.");
            return;
        }
        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();
        response(res,200,"Your Password reset successfully, you can now login with your new password");
        return;
    }
    catch(e){
        console.log(e);
        response(res, 500, "Internal server error, please try again");
        return;
    }
}   

export const logout = async(req:Request, res:Response)=>{

    try{
        res.clearCookie("access_token", {
            httpOnly: true
        })
        response(res,200, "Successfully loged out.");
    }
    catch(e){
        console.log(e);
        response(res,500, "Internal Server Error, Please Try Again");
    }
}