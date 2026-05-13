    const mongoose = require('mongoose');//importa o mongoose;

    //criaa o schema do nosso Servico;
    const servicoSchema = new mongoose.Schema({

        nome: { type:String, required: true }, 

        descricao: { type:String, required: true }, 

        precoServico: { type:Number, required:true }, 

        duracaoEstimada: { type:Number, required: true } 
        
    }, { timestamps: true }); //criaaa automaticamente um createdAt e updatedAt;


    module.exports = mongoose.model('Servico', servicoSchema);//exporta o modelo schema; 