import { Request, Response } from "express";
import User from "../models/User";
import { response } from "../utils/responseHandler";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "../config/emailConfig";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password, agreeTerms } = req.body;
        console.log(req.body);

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            response(res, 400, "User already exists");
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(salt);
        console.log(hashedPassword);

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

        // TODO: Send email with verification token (Implement email service)
        const result = await sendVerificationEmail(user.email, verificationToken);
        response(res, 201, "User registration successful, Please check your email to verify your account");
    } catch (error) {
        console.error("Registration Error:", error);
        response(res, 500, "Internal server error");
    }
};
