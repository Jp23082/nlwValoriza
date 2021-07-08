import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"

//Permite que 2 senhas sejam comparadas - Validar se senha está correta
import { compare } from "bcryptjs"

//Gerar token após validação
import { sign } from "jsonwebtoken"

//Service responsavel por gerar o token - JWT para um usuário
interface IAuthenticateRequest
{
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest)
    {
        const usersRepositories = getCustomRepository(UserRepositories);
        
        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect")
        }

        //Verfificar se senha está correta - Compara a senha passada com o hash inserido no banco
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }
        
        //Gerar Token - Passamos o payload, neste caso, email
        //e a chave secreta, podemos utilizar o seguinte site para gerar: https://www.md5hashgenerator.com/ 
        const token = sign({
            email: user.email
        }, "12f6160a2fd8771afebc88e0ac75c0e9",
        {
            subject: user.id,
            expiresIn: "1d" //Determina em quanto tempo o token criado irá expirar - 1 dia
        }
        );

        return token;
    }
}

export { AuthenticateUserService }