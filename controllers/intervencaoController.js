const Intervencao = require('../models/intervencaoModels'); //importa o modelo da Intervenção

//GET ALL, procura todas as intervençoes
const getAllIntervencoes = async (req, res) => {
    try {

        const intervencoes = await Intervencao.find()
            .populate('mecanico', 'nome email') 
            .populate('servico', 'nome'); 
        res.json(intervencoes);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};


//POST, cria uma nova intervençao
const createIntervencao = async (req, res) => {
    try {

        const novaIntervencao = await Intervencao.create(req.body); 
        res.status(201).json(novaIntervencao);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};


//GET BY MECANICO, procura qualquer intervençao de algum mecânico específico;
const getIntervencoesByMecanico = async (req, res) => {
    try {

        const intervencoes = await Intervencao.find({ mecanico: req.params.mecanicoId })
            .populate('servico', 'nome'); 
        res.json(intervencoes);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};

//DELETE BY ID, apaga uma intervencao pelo id da mesma;
const deleteIntervencao = async (req, res) => {
    try {

        await Intervencao.findByIdAndDelete(req.params.id);
        res.json({ message: 'Intervenção eliminada com sucesso!' });

    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getAllIntervencoes, createIntervencao, getIntervencoesByMecanico, deleteIntervencao};//exporta todas as funções;