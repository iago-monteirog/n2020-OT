const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controller/UsuarioController");
const CursoController = require("./controller/CursoController");
const LoginController = require("./controller/LoginController");

const auth = require("../src/middlewares/auth")

routes.post("/login", LoginController.login);
routes.post('/usuario', UsuarioController.create);

routes.post('/curso/criar', auth, CursoController.create);
routes.get('/cursos', CursoController.index);
routes.put('/curso/atualiza', auth, CursoController.update)
routes.delete('/curso/deleta', auth, CursoController.delete)

module.exports = routes;