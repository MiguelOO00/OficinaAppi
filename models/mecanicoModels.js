const mongoose = require('mongoose'); //importa o mongoose;

//Criaaa o schema dos nossos Mecanico 
const mecanicoSchema = new mongoose.Schema({

    nome: { type:String, required: true }, 

    email: { type:String, required: true, unique: true }, 

    password: { type:String, required: true }, 

    numeroTelefone:{ type:String, required: false, maxlength: 9}, 

    moradaMecanico:{ type:String, required: false }, 
    
    role: { type:String, enum: ['mecanico', 'gestor'], default: 'mecanico' } 


}, { timestamps: true }); //criaa automaticamente um createdAt e updatedAt;


module.exports = mongoose.model('Mecanico', mecanicoSchema);//exporta o modelo schema;



