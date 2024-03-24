var express = require('express');
var router = express.Router();

const bandasController = require("../controllers/bandasController")

router.get('/', bandasController.index)

router.get('/detalle/:id', bandasController.show)

router.get('/genero/:genero', bandasController.porGenero)


module.exports = router;