const connection = require('../database/connection')

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
    },

    async index(request, response) {
        const {curso} = await Curso.findAll()
        return response.json(curso)
    },

    async update(request, response){
        const {id_curso} = request.headers;
        const {titulo, link, imagem} = request.body;
        const curso = await Curso.update({
            titulo,
            imagem,
            link},
         {where:{ id: id_curso}
        })
        return response.json({
            curso,
            success: {message:"Sucesso, curso atualizado"}   
        })
    },

    async delete(request, response) {
        const {id_curso} = request.headers;
        const curso = await Curso.destroy({where: {id: id_curso}})
        return response.json({
            success: {message: "Curso excluido com sucesso"}
        })
    }
}