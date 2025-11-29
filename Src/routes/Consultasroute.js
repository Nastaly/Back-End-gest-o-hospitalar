const exports = require('express');
const ConsultaController = require('../controllers/consultacontrollers');
const consultasRoutes = exports.Router();
const consultaController = new ConsultaController();

consultasRoutes.post('/consulta', consultaController.create);
consultasRoutes.get('/consulta', consultaController.get);
consultasRoutes.put('/consulta/:id', consultaController.update);
consultasRoutes.delete('/consulta/:id', consultaController.delete);
module.exports = consultasRoutes;