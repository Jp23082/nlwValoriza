import {Request, Response} from "express"
import {CreateUserService} from "../services/CreateUserService"

class CreateUserController{
    async handle(request: Request, response: Response){
        //Recebendo as informações da requisição
        const { name, email, admin} = request.body;

        const createuserServices = new CreateUserService();

        const user = await createuserServices.execute({name, email, admin});

        //Encaminhando as informações para o service
        return response.json(user);

        //Fluxo continua no router.js
    }
}
export {CreateUserController};

/*Controllers são responsaveis por armazenar os requests e reponses da aplicação, faz a intermediação
entre o server.ts e a camada de service
*/