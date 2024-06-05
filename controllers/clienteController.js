// controllers/clienteController.js
const clienteService = require('../services/clienteService');
const bcrypt = require('bcryptjs');

exports.getClienteById = async (req, res, next) => {
    try {
        const cliente = await clienteService.getClienteById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ success: false, error: 'Cliente no encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        next(error);
    }
};

exports.createCliente = async (req, res, next) => {
    const { nombre, email, password, phone } = req.body;

    try {
        // Validar la contraseña aquí si es necesario antes de hashear
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password)) {
            return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, un número y un carácter especial' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // Encriptar la contraseña
        const cliente = await clienteService.createCliente({ nombre, email, password: hashedPassword, phone });
        res.status(200).json(cliente);
    } catch (error) {
        next(error);
    }
};

exports.getAllClientes = async (req, res, next) => {
    try {
        const clientes = await clienteService.getAllClientes();
        res.status(200).json(clientes);
    } catch (error) {
        next(error);
    }
};

exports.updateCliente = async (req, res, next) => {
    const { nombre, email, password, telefono } = req.body;

    try {
        // Si se proporciona una nueva contraseña, validar y encriptar
        if (password) {
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!passwordRegex.test(password)) {
                return res.status(400).json({
                    success: false,
                    error: 'La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula, un número y un carácter especial.'
                });
            }
            req.body.password = await bcrypt.hash(password, 10);
        }

        const cliente = await clienteService.updateCliente(req.params.id, req.body);
        res.status(200).json(cliente);
    } catch (error) {
        next(error);
    }
};

exports.deleteCliente = async (req, res, next) => {
    try {
        await clienteService.deleteCliente(req.params.id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};