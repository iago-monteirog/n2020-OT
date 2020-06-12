const connection = require("../database/connection");
const Curso = require('../models/curso');

module.exports = {
    async create(request, response){
        const {titulo, link, imagem} = request.body;
        const curso = await Curso.create({
            titulo, 
            link,
            imagem
        })
        return response.json({
            success: {message: "Curso cadastrado com sucesso"}
        })
    }
}