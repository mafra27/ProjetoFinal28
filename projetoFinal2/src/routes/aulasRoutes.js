const controller = require('../controller/aulasController')
const express = require('express')

const router = express.Router()



router.get("/conteudoGeral", controller.getAllAulas)
router.get("/conteudo/:id", controller.pegarId)
router.post("/adicionar", controller.addConteudo)
router.delete("/delete/:id", controller.deleteConteudo)
router.patch("/atualizar/:id", controller.atualiza)

module.exports = router