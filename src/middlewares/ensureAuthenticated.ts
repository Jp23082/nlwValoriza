import { Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayLoad{
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){
    //Receber o token
    const authtoken = request.headers.authorization

    //Validar se  o token está preenchido
    if(!authtoken){
        return response.status(401).end();
    }

    const [, token] = authtoken.split(" ")
    
    //Validar se token é valido
    try{
        const {sub} = verify(token, "12f6160a2fd8771afebc88e0ac75c0e9") as IPayLoad;

        //Recuperar informações do usuário
        request.user_id = sub;
        
        return next();
    }catch(err){
        return response.status(401).end();
    }

    
}