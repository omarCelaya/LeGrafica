// repositories/clienteRepository.js
const db = require('../config/db');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

exports.getClienteById = async (id) => {
    return new Promise(async (resolve, reject) => {
        // db.query('SELECT id, nombre, email, password, phone FROM usuarios WHERE id = ?', [id], (err, results) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve(results[0]);
        //     }
        // });
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
        // db.query('INSERT INTO usuarios (nombre, email, password, phone) VALUES (?, ?, ?, ?)', [nombre, email, password, phone], (err, result) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve({ id: result.insertId, nombre, email, password, phone });
        //     }
        // });
        try {
            // const usuario = await Usuario.create(clienteData);
            // console.log(bcrypt.(password))
            resolve(await Usuario.create({nombre, email, password, phone }));
        } catch (err) {
            reject(err);
        }
    });
};

exports.getAllClientes = async () => {
    return new Promise(async (resolve, reject) => {
        // db.query('SELECT id, nombre, email, password, phone FROM usuarios', (err, results) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve(results);
        //     }
        // });
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
        // db.query('UPDATE usuarios SET nombre = ?, email = ?, password = ?, phone = ? WHERE id = ?', [nombre, email, password, phone, id], (err) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve({ id, nombre, email, password, phone });
        //     }
        // });
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
        // db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve();
        //     }
        // });
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