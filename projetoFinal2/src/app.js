require("dotenv-safe").config()
const express = require("express")
const app = express()
const database = require("./database/mongooseConnect")


const aulasRouter = require("./routes/aulasRoutes");

app.use(express.json())
app.use("/aulas", aulasRouter)

const index = require('../src/routes/index.js')
app.use('/', index);

database.connect()

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => res.status(200).send({
    "API": "Back-up Memory",
    "versao": "1.0.0",
    "Criador": "Michelle Mafra"
}))



module.exports = app


