const mongoose = require('mongoose'); //importa o mongoose;

//schema do Veículo
const veiculoSchema = new mongoose.Schema({
    matricula: { type: String, required: true, unique: true }, //matrícula do veículo;

    marca: { type: String, required: true }, //marca do veículo;

    modelo: { type: String, required: true }, //modelo do veículo ;

    preço: { type: Number, required: false } //preço do veículo;
 
}, { timestamps: true }); //cria automaticamente createdAt e updatedAt;


module.exports = mongoose.model('Veiculo', veiculoSchema);//exporta o modelo;