import User from "../models/User";
import { response } from "../utils/responseHandler";
import crypto from "crypto";

export const register = async(req: Request, res:Response) =>{
    try{
        const {name, email, password, agreeTerms} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return response(res, 400, "User already exists");
        }

        const verificationToken = crypto.randomBytes(32).toString("hex");
        const user = new User({ name , email , password , agreeTerms, verificationToken });
        await user.save();
        return response(res, 200, "User registration successful, Please check your email to verify your account");
    }
    catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}