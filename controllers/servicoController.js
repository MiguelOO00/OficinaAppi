const Servico = require('../models/servicoModels'); //importa o modelo do Serviço;

//GET ALL -> procura todos os serviços introduzidos na base de dados;
const getAllServicos = async (req, res) => {
    try {

        const servicos = await Servico.find(); 
        res.json(servicos); 

    } catch (error) {
        res.status(500).json({ message: error.message }); //se existir algum erro, delvolve esse erro;
    }
};

//POST -> cria um novo serviço na base de dados;
const createServico = async (req, res) => {
    try {

        const novoServico = await Servico.create(req.body); 
        res.status(201).json(novoServico); 

    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

//PUT -> atualiza um serviço pelo ID;
const updateServico = async (req, res) => {
    try {

        const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true }); //encontra o serviço pelo ID e atualiza, devolvendo o documento já atualizado
        if (!servico) return res.status(404).json({ message: 'Serviço nao encontrado' }); 
        res.json(servico); 

    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

//DELETE, elimina um serviço pelo ID
const deleteServico = async (req, res) => {
    try {

        const servico = await Servico.findByIdAndDelete(req.params.id); //encontra o serviço pelo ID e elimina
        if (!servico) return res.status(404).json({ message: 'Serviço nao encontrado' }); 
        res.json({ message: 'Serviço eliminado com sucesso!' }); 

    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

module.exports = { getAllServicos, createServico, updateServico, deleteServico }; //exporta as funções