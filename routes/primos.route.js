var express = require('express');
var router = express.Router();
const primosController = require('../controllers/primos.controllers');

/* GET users listing. */
router.get('/:num', function(req, res, next)  {
  let numerosEncontrados = primosController.buscarNumerosPrimos(req.params.num);
  //console.log('numerosEncontrados:', numerosEncontrados);
  res.json({'Los numeros primos son:': numerosEncontrados });
});

module.exports = router;
