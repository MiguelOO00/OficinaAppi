const express = require('express'); //importa o express;;
const router = express.Router(); //cria o router;


//importa as funçoes do controller
const { getAllServicos, createServico, updateServico, deleteServico } = require('../controllers/servicoController');
const verifyToken = require('../middlewares/authMiddleware'); 



//Routes:
router.get('/', verifyToken, getAllServicos);//Route para devolver os serviços; 
router.post('/', verifyToken, createServico);//Route para criar um serviço;
router.put('/:id', verifyToken, updateServico);//Route para atualizar um serviço;
router.delete('/:id', verifyToken, deleteServico);//Route para dar delete no servico;



module.exports = router;//exporta o router