import { NextFunction, Request, response, Response } from "express";

const authenticateUser = async(req:Request, res:Response, next:NextFunction) =>{

    const token = req.cookies.access_token;
    if(!token){
        response();
    }

    try{
        const decode = 
    }
    catch(){
        
    }
}