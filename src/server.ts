//Importando o express - Biblioteca responsavel por criar as rotas da aplicação
// Instalar dependencia - yarn add express
// Instalar as tipagens - yarn add @types/express
import express, { response } from "express";

//Inicializando a variavel express
const app = express()

//Criando uma rota - GET
app.get("/test",(request,response) =>{
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá NLW");
})

//Criando uma rota - POST
app.post("/test-post",(request, response) =>{
    return response.send("Olá NLW método POST");
})

//Por padrão o navegador só entende GET, por isso usamos o Insomnia para realizar os outros métodos HTTP 

//Inicializando o servidor http://localhost:3000
app.listen(3000, () => console.log("Server is running"));

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

  