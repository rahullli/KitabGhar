import { NextFunction, Request, Response } from "express";
import {response} from "../utils/responseHandler";
import jwt from 'jsonwebtoken';

declare global {
    namespace Express{
        interface Request{
            id: string
        }
    }
}

const authenticateUser = async(req:Request, res:Response, next:NextFunction) =>{

    const token = req.cookies.access_token;
    if(!token){
        response(res,401,"User not authenticated, or no token available");
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        if(!decode){
            return response(res,401,"Not Authorized, user not found");
        }
        req.id = decode.userId;
        next();
    }
    catch(err){
        return response(res,401,"Not Authorized, token not valid or expired");
    }
}

export {authenticateUser};