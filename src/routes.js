const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controller/UsuarioController");
const CursoController = require("./controller/CursoController");
const LoginController = require("./controller/LoginController");

routes.post("/login", LoginController.login);
routes.post('/usuario', UsuarioController.create);

routes.post('/curso/criar', CursoController.create);
routes.get('/cursos', CursoController.index);
routes.put('/curso/atualiza', CursoController.update)
routes.delete('/curso/deleta', CursoController.delete)

module.exports = routes;