const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controller/UsuarioController");
const CursoController = require("./controller/CursoController");
const LoginController = require("./controller/LoginController");

routes.post('/usuario', UsuarioController.create)
routes.post('/curso/criar', CursoController.create)
routes.get('/cursos', CursoController.index)
routes.post("/login", LoginControlller.login)

module.exports = routes;