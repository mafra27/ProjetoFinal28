const aulas = require('../models/aulasModels.json')

const getAllAulas = (request, response) => {
    try {
        response.status(200).json([{
            "Aulas": aulas
        }])
    } catch (err) {
        response.status(500).send({ message: "Deu um erro ai" })
    }
}
module.exports = {
    getAllAulas
}