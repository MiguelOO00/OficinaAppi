const jwt = require('jsonwebtoken'); //importa o jwt para verificar os tokens;
 

const keySecreta = process.env.JWT_SECRET || 'RobMigFaculdade2026Letivo'

//função que verifica o token via cookie;
function verifyToken(req, res, next) {
   
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'O token nao foi encontrado!!' });
    }

    try {
        
        //cria a descodificacao do token;
        const descodifica = jwt.verify(token, keySecreta);

        //guarda os dados dos mecanicos no req para utilizar depois;
        req.user = descodifica;

        //vai para a próxima rota;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'O token esta invalido ou encontra se expirado!!' });
    }
}


module.exports = verifyToken; //exporta a função;