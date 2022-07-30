const mongoose = require("mongoose")

const aulaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    turma: {
        type: String,
        required: true
    },
    professora: {
        type: String,
        required: false
    },
    nome: {
        type: String,
        required: true
    },
    linkAula: {
        type: String,
        required: true
    },
    linkExtra1: {
        type: String,
        required: true
    },
    linkExtra2: {
        type: String,
        required: false
    },
    linkExtra3:{
        type: String, 
        default: false

    },
    dataHora:{
        type: Date, 
        default: new Date()
    }

})

module.exports= mongoose.model("aulas", aulaSchema)

