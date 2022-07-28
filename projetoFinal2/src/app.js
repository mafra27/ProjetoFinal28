const express = require("express")
const app = express()
const database = require("./database/mongooseConnect")

const aulasRouter = require("./routes/aulasRoutes")

app.use("/aulas", aulasRouter)

database.connect()

module.exports= app


