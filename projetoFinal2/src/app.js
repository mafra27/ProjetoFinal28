require("dotenv-safe").config()
const express = require("express")
const app = express()
const database = require("./database/mongooseConnect")

//const aulasRouter = require("./routes/aulasRoutes")

//app.use("/aulas", aulasRouter)

database.connect()

app.get("/", (req,res) => res.status (200).send ("Esta funcionando"))

module.exports= app

