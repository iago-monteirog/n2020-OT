const connection = require('../database/connection')

const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

module.exports = {
    async login(request, response) {
        const {username, password} = request.body;

        const user = await Usuario.findOne({
            where: {
                username: username,
                password: password
            }  
        });

        if(!user) return response.send({erro: {message: "Usuário não encontrado"}});

        const token = jwt.sign({id: user.id}, authConfig.secret, {
            expiresIn: 86400,
        });

        response.json({user, token});
            
    }
}

