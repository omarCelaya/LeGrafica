// services/clienteService.js
const clienteRepository = require('../repositories/clienteRepository');

exports.getClienteById = async (id) => {
    return await clienteRepository.getClienteById(id);
};

exports.createCliente = async (clienteData) => {
    return await clienteRepository.createCliente(clienteData);
};

exports.getAllClientes = async () => {
    return await clienteRepository.getAllClientes();
};

exports.updateCliente = async (id, clienteData) => {
    return await clienteRepository.updateCliente(id, clienteData);
};

exports.deleteCliente = async (id) => {
    return await clienteRepository.deleteCliente(id);
};