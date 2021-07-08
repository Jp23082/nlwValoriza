import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"
//Bilbioteca para criptografar a senha antes da inserção no banco
import { hash } from "bcryptjs"

//Dentro da interface declaramos as informações necessárias para realizar um cadastro de usuário
interface IUserRequest
{
    name: string;
    email: string;
    admin?: boolean; // O ? siginifica que o parametro é opcional na hora do cadastro
    password: string;
}

class CreateUserService
{
    //Desestruturação
    async execute({name, email, admin = false, password} : IUserRequest){
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

        //Criptografando a senha
        const passwordHash = await hash(password,8)

        //Caso não exista será criado um objeto para posterior inserção
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        //Salva objeto
        await usersRepository.save(user);

        //Retorna para posterior recuperação
        return user;
    }
}

export {CreateUserService}

//Para cada cadastro de informação usual criar uma camada de services diferente.
/**
 * Para inserção de senhas no banco necessário criptografa-las antes de inserir
 * Para isso utilizamos a seguinte bilbioteca
 * yarn add bcryptjs
 * yarn add @types/bcryptjs -D
 */

