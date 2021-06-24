import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"

//Dentro da interface declaramos as informações necessárias para realizar um cadastro de usuário
interface IUserRequest
{
    name: string;
    email: string;
    admin?: boolean; // O ? siginifica que o parametro é opcional na hora do cadastro
}

class CreateUserService
{
    //Desestruturação
    async execute({name, email, admin} : IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories);

        //Verifica se o email é diferente de vazio
        if(!email){
            throw new Error("Email incorrect");
        }

        //Verifica se o email já está cadastrado no banco
        const userAlreadyExists = await usersRepository.findOne({
            email, 
        })

        //Se já existir lança uma exceção
        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        //Caso não exista será criado um objeto para posterior inserção
        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        //Salva objeto
        await usersRepository.save(user);

        //Retorna para posterior recuperação
        return user;
    }
}

export {CreateUserService}

//Para cada cadastro de informação usual criar uma cadama de services diferente.
