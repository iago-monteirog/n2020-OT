const Usuario = require('../models/usuario');

module.exports = {
    async create(request, response){
        const {username, password} = request.body;
        const user = await Usuario.create({
            username,
            password
        })
        return response.json({
            success: {message: "Cadastrado com sucesso"}
        })
    }
}
