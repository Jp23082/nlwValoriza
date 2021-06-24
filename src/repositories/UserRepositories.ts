import {EntityRepository, Repository} from "typeorm";
import { User } from "../entities/User"

@EntityRepository(User)
class UserRepositories extends Repository<User>
{

}

export{UserRepositories};

//Repositories são as classes reponsaveis por intermediar a comunicação das entidades com as tabelas
/*Camada de services: Trata-se de uma camada de responsavel por realizar toda a validação dos dados 
da requisição antes de realizar a requisição propriamente dita, ou seja, aplica as regras de negócio
necessárias em cima das informações enviadas.

 FLUXO DA APLICAÇÃO
    server.ts -> [controllers] -> Services -> Repositores -> BD
*/