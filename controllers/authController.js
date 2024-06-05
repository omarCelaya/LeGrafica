// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
const ErrorResponse = require('../utils/errorResponse');

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe en la base de datos
        const usuario = await Usuario.findOne({ where: { email } });;

        if (!usuario) {
            return next(new ErrorResponse('El correo no existe', 401));
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, usuario.password);
        if (!isMatch) {
            return next(new ErrorResponse('La contraseña es incorrecta', 401));
        }

        // Generar token JWT
        console.log(usuario.id)
        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.status(200).json({ success: true, token });
    } catch (error) {
        next(error);
    }
};

exports.decode = async (req, res, next) => {
    const { token } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ success: true, decoded });
    } catch (error) {
        res.status(400).json({ error: 'Token no válido' });
    }
};
