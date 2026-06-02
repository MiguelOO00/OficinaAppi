const express = require('express'); 
const router = express.Router(); 

//importa as funções do controller
const { getAllIntervencoes, createIntervencao, getIntervencoesByMecanico, deleteIntervencao } = require('../controllers/intervencaoController');
const { verifyToken } = require('../middlewares/authMiddleware'); 


//Routes:
router.get('/', verifyToken, getAllIntervencoes); //route para procurar as intervecoes;
router.post('/', verifyToken, createIntervencao); //route para criar uma intervencao;
router.get('/mecanico/:mecanicoId', verifyToken, getIntervencoesByMecanico); //route para procurar o historico;
router.delete('/:id', verifyToken, deleteIntervencao); //route para apagar uma intervencao pelo id;


module.exports = router;//exporta o router