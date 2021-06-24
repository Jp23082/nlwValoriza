//Importando o express - Biblioteca responsavel por criar as rotas da aplicação
// Instalar dependencia - yarn add express
// Instalar as tipagens - yarn add @types/express
import express, { response } from "express";

//importando o ormtype
import "reflect-metadata";

//Importando o database
import "./database"

//Importando o router
import { router } from "./routes"

//Inicializando a variavel express
const app = express()

//Indica que o tipo de requisição será realizado com JSON
app.use(express.json());

//Disponibiliza todas as rotas criadas
app.use(router)

//Inicializando o servidor http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
















//ANOTAÇÕES
//Criando uma rota - GET
// app.get("/test",(request,response) =>{
//     // Request => Entrando
//     // Response => Saindo
//     return response.send("Olá NLW");
// })

//Criando uma rota - POST
// app.post("/test-post",(request, response) =>{
//     return response.send("Olá NLW método POST");
// })

//Por padrão o navegador só entende GET, por isso usamos o Insomnia para realizar os outros métodos HTTP 



//Converter em um arquivo js - yarn tsc
//Executar o arquivo - node src/server.js

/*
Automatizar o processo acima - yarn add ts-node-dev -D
Adicionar no package.json o seguinte codigo
    "scripts": {
    "dev": "ts-node-dev src/server.ts"
  },

Para executar agora basta inserir no terminal o seguinte comando: yarn dev
Desta forma qualquer alteração realizada no codigo será automaticamente identificada
*/

/*
  Metodos HTTP
  GET       => Buscar uma informação
  POST      => Inserir(Criar) uma informação
  PUT       => Alterar uma informação
  DELETE    => Remover um dado
  PATCH     => Alterar uma informação especifica
 */

/*
  Tipos de parametros
    - Routes Params: Trata-se de parametros obrigatorios que são passado na estrutura da rota
        Ex: http://localhost:3000/produtos/1234, sendo 1234 um ID por exemplo
    - Query Params: Também são passados na propria rota, contudo trata-se de parametros não obrigatorios.
        Ex: http://localhost:3000/produtos?name=teclado&description=tecladobom
    - Body Params: São Parametros que são definidos no proprio corpo da requisição em formato JSON.
        Ex: teste => {
          "name": "teclado"
          "description": "teclado bom"
        }
*/

/*ORM: Object Relational Mapping: Trata-se de frameworks que ajudam no mapeamneto entre a entidade e 
o objeto. */

/*Configurando banco de dados
        - Instalar as seguintes dependencias: yarn add typeorm reflect-metadata sqlite3.
        - Criar arquivo ormconfig.json com as configurações da base de dados.
        - Dentro de src, criar pasta database, com um arquivo index.ts que terá as propriedades do banco  
*/
  