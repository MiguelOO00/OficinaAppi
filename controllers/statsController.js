const Intervencao = require('../models/intervencaoModels'); //importa o modelo da Intervençao;

//GET TOTAL, devolve o número total de intervenções;
const getTotalIntervencoes = async (req, res) => {
    try {

        const total = await Intervencao.countDocuments(); //conta todos os documentos;
        res.json({ total });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};

//GET TOP SERVICOS, delvove os serviços mais requisitados;
const getTopServicos = async (req, res) => {
    try {

        const topServicos = await Intervencao.aggregate([
            { $group: { _id: '$servico', total: { $sum: 1 } } }, //agrupa por serviço e soma;
            { $sort: { total: -1 } }, //ordena por mais requisitados;
        ]);
        res.json(topServicos);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};

//GET TEMPO, devolve o tempo total por servico;
const getTempoByServico = async (req, res) => {
    try {

        const tempo = await Intervencao.aggregate([
            { $group: { _id: '$servico', tempoTotal: { $sum: '$duracaoEstimada' } } } //soma a duração por serviço no caso soma os tempos do mesmo serviço;
        ]);
        res.json(tempo);

    } catch (error) {
        
        res.status(500).json({ message: error.message });

    }
};

//exporta as funções
module.exports = { getTotalIntervencoes, getTopServicos, getTempoByServico };