const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, clienteController.getAllClientes)
    .post(clienteController.createCliente);

router.route('/:id')
    .get(clienteController.getClienteById)
    .put(protect, clienteController.updateCliente)
    .delete(protect, clienteController.deleteCliente);

module.exports = router;