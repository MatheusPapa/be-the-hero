const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
  Rota / Recurso
*/
/*
  Métodos HTTP:
    
  GET: Buscar uma informação do back-end
  POST: Criar uma informação no back-end
  PUT: Alterar uma informação no back-end
  DELETE: Deletar uma informação no back-end
*/

/*
  Tipos de parâmetros

  Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  Route Params: parâmetros utilizados para identificar recursos
  Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
  SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
  NoSQL: MongoDB, CouchDB, etc
*/

/*
  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where() => KNEX.JS
*/



module.exports = app;