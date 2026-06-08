const Veiculo = require('../models/veiculoModels'); //importa o modelo do Veículo;

//GET ALL, procura todos os veículos;
const getAllVeiculos = async (req, res) => {
    try {

        const veiculos = await Veiculo.find(); //procura todos os veículos;
        res.json(veiculos);

    } catch (error) {

        res.status(500).json({ message: error.message }); //Se nao encontrar devolve mensagem de erro;

    }
};

//POST, cria um novo veículo;
const createVeiculo = async (req, res) => {
    try {

        const novoVeiculo = await Veiculo.create(req.body); //criaa um veículo com os dados que foram enviados;
        res.status(201).json(novoVeiculo);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};

//PUT, atualiza um veículo pelo ID;
const updateVeiculo = async (req, res) => {
    try {
        
        const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, req.body, { new: true }); //ele encontra o veiculo faz a atualização e ja devolve atualizadoo; 
        if (!veiculo) return res.status(404).json({ message: 'Veículo não encontrado' });
        res.json(veiculo);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};

//DELETE, elimina um veículo pelo ID;
const deleteVeiculo = async (req, res) => {
    try {

        const veiculo = await Veiculo.findByIdAndDelete(req.params.id); //ele encontra o veiculo e procura se nao for encontrado devolve mensagem;
        if (!veiculo) return res.status(404).json({ message: 'Veículo não encontrado' });
        res.json({ message: 'Veículo eliminado com sucesso!' });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};


module.exports = { getAllVeiculos, createVeiculo, updateVeiculo, deleteVeiculo }; //exporta todas as funções;