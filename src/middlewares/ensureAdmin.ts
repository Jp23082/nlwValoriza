import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

//Responsavel por verificar se o usuário que está fazendo a requisição é Administrador
export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UserRepositories);

    const { admin } = await usersRepositories.findOne(user_id);

    //Verficar se o usuário é admin
    if(admin){
        return next();
    }

    return response.status(401).json({
        error:"Unauthorized",
    });
}