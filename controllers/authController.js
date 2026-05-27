const Mecanico = require('../models/mecanicoModels'); //importa o modelo do Mecânico;
const bcrypt = require('bcryptjs'); //importa o bcrypt que serve para encriptar passwords;
const jwt = require('jsonwebtoken');//importa o jwt que serve para gerar tokens;   


const secretKey = process.env.JWT_SECRET || 'RobMigFaculdade2026Letivo'; //Middleware Key;

//REGISTAR -> esta funcao cria um novo mecanico!! IMPORTANTE;
const register = async (req, res) => {
    try {

        const { nome, email, password, role, numeroTelefone } = req.body;

        const emailExiste = await Mecanico.findOne({ email });  
        if (emailExiste) return res.status(400).json({ message: 'Este Email já foi registado' });

        //Encripta a password com bcrypt; IMPORTANTE;
        const passwordEncriptada = await bcrypt.hash(password, 10);

        //cria o mecânico e introduz lo na base de dados;
        await Mecanico.create({ nome, email, password: passwordEncriptada, role, numeroTelefone });

        res.status(201).json({ message: 'O Mecânico foi introduzido com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//LOGIN -> gera um token e guarda este em cookie!!;IMPORTANTE;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const mecanico = await Mecanico.findOne({ email });
        if (!mecanico) return res.status(401).json({ message: 'Credenciais do mecânico são inválidas!!' });

        const passwordCorreta = await bcrypt.compare(password, mecanico.password);
        if (!passwordCorreta) return res.status(401).json({ message: 'Credenciais da password são inválidas!!' });

        //Gera o token JWT, IMPORTANTE!!:
        const token = jwt.sign(
            { userId: mecanico._id, role: mecanico.role },
            secretKey,
            { expiresIn: '1h' }
        );

        //Guarda o token num cookie, IMPORTANTE;
        res.cookie('token', token, {
            httpOnly: true,         //impede acesso via JS, IMPORTANTE;
            sameSite: 'Strict',     //protege contra CSRF -> ;
            maxAge: 60 * 60 * 1000  //1 hora de duração que o token apresenta; 
        } );

        res.json({ message: 'Autenticado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//LOGOUT -> Limpa o cookie;
const logout = (req, res) => {

    res.clearCookie('token');
    res.json({ message: 'A Sessão foi encerrada com sucesso.' });
    
};


module.exports = { register, login, logout };
