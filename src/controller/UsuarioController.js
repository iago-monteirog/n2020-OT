const Usuario = require('../models/usuario');
const connection = require("../database/connection")


module.exports = {
    async create(request, response){
        const {username, password} = request.body;
        await Usuario.create({
            username,
            password,
        })
        return response.json({
            success: {message: "Cadastrado com sucesso"}
        })
    }
}
