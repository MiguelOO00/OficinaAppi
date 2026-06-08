const mongoose = require('mongoose');//importa o mongoose;

//criaa o schema para a nossa interacao;
const interacaoSchema = new mongoose.Schema({

    mecanico: {type:mongoose.Schema.Types.ObjectId, ref: 'Mecanico', required:true }, //nome do mecanico que realizou a intervecao -> Referencia ao MecanicoModels;

    servico: {type:mongoose.Schema.Types.ObjectId, ref: 'Servico', required: true }, //nome do serviço que foi realizado na intervencao -> Referencia ao ServicoModels;

    veiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Veiculo', required: true }, //referência ao veiculo onde foi realizada a intervenção;

    data: {type:Date, required: true}, 
    
    duracaoEstimada: {type:Number, required: true }, 

    notasOpcionais: {type:String, required: false} 
    
}, { timestamps: true }); //criaaa automaticamente um createdAt e updatedAt;


module.exports = mongoose.model('Interacao', interacaoSchema);//exporta o modelo schema;