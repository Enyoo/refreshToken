import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


export function ensureAuthenticated(request: Request, response:Response, next:NextFunction){
    const authToken = request.headers.authorization;
    if(!authToken){
        return response.status(401).json({
            message: "Token is missing"
        })
    }

    const [, token] = authToken.split(" ");
    
    try{
        
        verify(token, "9797d094-c181-47de-a3bd-4bcf2405d2e8");

        return next();

    }catch(err){
        return response.status(401).json({
            message: "Token invalid"
        })
    }
    
}