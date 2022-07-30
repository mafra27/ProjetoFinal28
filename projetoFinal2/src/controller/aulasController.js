const aulasModels = require('../models/aulasModels')
const mongoose = require("mongoose")

const getAllAulas = async (request, response) => {
    try {
        const aulas = await aulasModels.find()
        response.status(200).json([{
            "Aulas": aulas
        }])
    } catch (error) {
        response.status(500).send(error.message)
    }
}

const pegarId = async (request, response) => {
    try {
        const aulasPorId = await aulasModels.findById(request.params.id)
        response.status(200).json(
            aulasPorId
        )
    } catch (error) {
        response.status(500).send(error.message)
    }
}

const addConteudo = async (request, response) => {
    try {
        const body = request.body
        const addAula = await aulasModels.create(body)
        response.status(201).json({
            "mensagem": "Aula adicionada, obrigada por contribuir!",
            addAula
        })
    } catch (error) {
        response.status(500).send(error.message)
    }
}

const deleteConteudo = async (request, response) => {
    try {
        const aulas = await aulasModels.findByIdAndDelete(request.params.id)
        response.status(200).json({
            "mensagem": "Aula deletada, obrigada por contribuir!",
        })
    } catch (error) {
        response.status(500).send(error.message)
    }
}

const atualiza = async (request, response) => {
    try {

        const aulas = await aulasModels.findById(request.params.id)
        if (aulas) {
            aulas.turma = request.body.turma || aulas.turma
            aulas.professora = request.body.professora || aulas.professora
            aulas.nome = request.body.nome || aulas.nome
            aulas.linkAula = request.body.linkAula || aulas.linkAula
            aulas.linkExtra1 = request.body.linkExtra1 || aulas.linkExtra1
            aulas.linkExtra2 = request.body.linkExtra2 || aulas.linkExtra2

            await aulas.save()
            response.status(200).json({
                "mensagem": `Aula ${aulas.nome} atualizada, obrigada por contribuir!`,
            })
        }

        response.status(404).json({
            "mensagem": "Aula nao encontrada, tente novamente!",
        })
    } catch (error) {
        response.status(500).send(error.message)
    }
}

module.exports = {
    getAllAulas, pegarId, addConteudo,
     deleteConteudo, atualiza
}
