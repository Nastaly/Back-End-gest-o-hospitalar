const express = require('express')
const PacienteController = require('../controllers/PacienteController')
const pacienteRoutes = express.Router()

pacienteRoutes.post('/paciente', new PacienteController().create)
pacienteRoutes.get('/paciente', new PacienteController().get)
pacienteRoutes.put('/paciente/:id', new PacienteController().update)
pacienteRoutes.delete('/paciente/:id', new PacienteController().delete)
module.exports = pacienteRoutes;
