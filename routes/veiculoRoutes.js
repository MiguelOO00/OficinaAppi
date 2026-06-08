const express = require('express'); 
const router = express.Router(); 

//importa as funções do controller
const { getAllVeiculos, createVeiculo, updateVeiculo, deleteVeiculo } = require('../controllers/veiculoController');
const { verifyToken, authorizeGestor } = require('../middlewares/authMiddleware');


//Routes:
router.get('/', verifyToken, getAllVeiculos); //route para procurar os veiculos (qualquer utilizador autenticado);
router.post('/', verifyToken, authorizeGestor, createVeiculo); //route para criar um veiculo (apenas gestores);
router.put('/:id', verifyToken, authorizeGestor, updateVeiculo); //route para atualizar um veiculo pelo Id (apenas gestores);
router.delete('/:id', verifyToken, authorizeGestor, deleteVeiculo); //route para realizar delete do veiculo pelo ID (apenas gestores);


module.exports = router; //exporta o router
