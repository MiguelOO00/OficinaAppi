const express = require('express'); 
const router = express.Router(); 
const Mecanico = require('../models/mecanicoModels');

//importa as funções do controller;
const { register, login, logout } = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware'); 

//Routes:
router.post('/register', register); //route para introduzir um novo mecânico;
router.post('/login', login); //route para realizar um login;
router.post('/logout', logout); //route para realizar o logout;
router.get('/mecanicos', verifyToken, async (req, res) => {
    try {
        const mecanicos = await Mecanico.find();
        res.json(mecanicos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao procurar mecânicos" });
    }
});



module.exports = router; //exporta o router;