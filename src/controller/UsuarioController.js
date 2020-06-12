const connection = require("../database/connection");
const Usuario = require('../models/usuario');

module.exports = {
    async create(request, response){
        const {username, password} = request.body;
        const user = await Usuario.create({
            username,
            password
        })
        return response.json({
            sucess: {message: "Cadastrado com sucesso"}
        })
    }
}
