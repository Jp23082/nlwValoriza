import {Request, Response, NextFunction} from "express"

//Responsavel por verificar se o usuário que está fazendo a requisição é Administrador
export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    //Verficar se o usuário é admin
    const admin = true;

    if(admin){
        return next();
    }

    return response.status(401).json({
        error:"Unauthorized",
    });
}