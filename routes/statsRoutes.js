const express = require('express'); 
const router = express.Router(); 

//importa as funçoes do controller;
const { getTotalIntervencoes, getTopServicos, getTempoByServico } = require('../controllers/statsController');
const verifyToken = require('../middlewares/authMiddleware'); 


//Routes:
router.get('/total', verifyToken, getTotalIntervencoes); //route para procurar o total de intervenções (protegida)
router.get('/top-servicos', verifyToken, getTopServicos); //route para procurar os serviços mais requisitados (protegida)
router.get('/tempo', verifyToken, getTempoByServico); //route para procurar o tempo total por serviço (protegida)



module.exports = router; //exporta o router