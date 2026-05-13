const express = require('express'); 
const router = express.Router(); 
const Mecanico = require('../models/mecanicoModels');

//importa as funções do controller;
const { register, login, logout } = require('../controllers/authController');


//Routes:
router.post('/register', register); //route para introduzir um novo mecânico;
router.post('/login', login); //route para realizar um login;
router.post('/logout', logout); //route para realizar o logout;
router.get('/mecanicos', async (req, res) => {  

    const mecanicos = await Mecanico.find();

    res.json(mecanicos);

});



module.exports = router; //exporta o router;