const aulas = require('../models/aulasModels.json')

const getAllAulas = (request, response) => {
response.status(200).json([{
"Aulas": aulas
}])
}

module.exports = {
    getAllAulas
}