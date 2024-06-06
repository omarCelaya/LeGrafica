// repositories/clienteRepository.js
const Usuario = require('../models/Usuario');

exports.getClienteById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario)  reject('Cliente no encontrado');
            resolve(usuario);
        } catch (err) {
            reject(err);
        }
    });
};

exports.createCliente = async (clienteData) => {
    const { nombre, email, password, phone } = clienteData;
    return new Promise(async(resolve, reject) => {
        try {
            resolve(await Usuario.create({nombre, email, password, phone }));
        } catch (err) {
            reject(err);
        }
    });
};

exports.getAllClientes = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const usuarios = await Usuario.findAll();
            if (!usuarios)  reject('Cliente no encontrado');
            resolve(usuarios);
        } catch (err) {
            reject(err);
        }
    });
};

exports.updateCliente = async (id, clienteData) => {
    const { nombre, email, password, phone } = clienteData;
    return new Promise(async (resolve, reject) => {
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) throw new Error('Cliente no encontrado');
            Object.assign(usuario, clienteData);
            await usuario.save();
            resolve(usuario);
        } catch (err) {
            reject(err);
        }
    });
};

exports.deleteCliente = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) throw new Error('Cliente no encontrado');
            await usuario.destroy();
            resolve("Se elimino el cliente correctamente");
        } catch (err) {
            reject(err);
        }
    });
};