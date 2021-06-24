//importando biblioteca responsavel pela conexão com o banco
import { createConnection } from "typeorm";

createConnection();

/*
    Criar uma migration no typeorm
    Migration: Github de banco de dados
        Ex: yarn typeorm migration:create -n CreateUsers
    
        Sendo CreateUsers o nome da Migration
*/