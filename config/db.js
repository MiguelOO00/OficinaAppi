const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB ligado!');

    } catch (error) {

        console.log('Erro ao ligar ao MongoDB:', error);
    }
};

module.exports = connectDB;