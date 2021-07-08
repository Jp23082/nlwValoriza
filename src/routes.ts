import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", ensureAdmin , createUserController.handle); //Rota - Middleware - Controller
router.post("/tags", createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

export{ router };

//Fluxo continua no server.ts

//Middlewares pode ser passados entre a Rota e o controller 
//Caso tenhamos mais de um middleware por rota basta separa-los por virgula
/*Exemplo:
router.post("/users", middleware1, middleware2, ... , createUserController.handle); 
*/ 