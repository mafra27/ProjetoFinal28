const controller = require('../controller/aulasController')
const express = require('express')

const router = express.Router()
router.get("/biblioteca", controller.getAllAulas)


//essas sao as minhas rotas, estao certas?
router.get("/conteudoGeral", controller.getAllAulas)
router.get("/conteudo/:id", controller.pegarId)
router.post("/adicionar/:id", controller.addConteudo)
router.delete("/delete/:id", controller.deleteConteudo)
router.patch("/atualizar/:id", controller)

module.exports = router