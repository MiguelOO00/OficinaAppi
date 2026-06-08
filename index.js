const express = require('express'); //framework Express;
const cookieParser = require('cookie-parser'); //Middleware para gerir as cookies;
const connectDB = require('./config/db'); //função de ligação a base de dados;
require('dotenv').config(); //carrega as variaveis do ficheiro .env;

const app = express();
connectDB();

//Middlewares necessarios;
app.use(express.json());
app.use(cookieParser());


//Routes:
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const servicoRoutes = require('./routes/servicoRoutes');
app.use('/servicos', servicoRoutes);

const intervencaoRoutes = require('./routes/intervencaoRoutes');
app.use('/intervencoes', intervencaoRoutes);

const statsRoutes = require('./routes/statsRoutes'); 
app.use('/stats', statsRoutes); 

const veiculoRoutes = require('./routes/veiculoRoutes');
app.use('/veiculos', veiculoRoutes);

app.listen(4000, () => {
    console.log('Servidor iniciado na porta 4000');
});