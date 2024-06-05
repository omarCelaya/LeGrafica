// routes/index.js
const express = require('express');
const clienteRoutes = require('./clienteRoutes');
const authRoutes = require('./authRoutes');

const router = express.Router();

router.use('/clientes', clienteRoutes);
router.use('/auth', authRoutes);

module.exports = router;