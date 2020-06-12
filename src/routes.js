const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controller/UsuarioController");
const CursoController = require("./controller/CursoController");

routes.post('/usuario', UsuarioController.create)

module.exports = routes;