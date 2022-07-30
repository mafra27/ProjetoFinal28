const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).send({
        "API": "Back-up Memory",
        "versao": "1.0.0",
        "Criador": "Michelle Mafra"
    })
});

module.exports = router;