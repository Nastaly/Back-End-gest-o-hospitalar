const express = require('express');
const ProntuarioController = require('../controllers/prontuariocontrollers');
const prontuarioroutes = express.Router();

prontuarioroutes.post('/prontuario', new ProntuarioController().create);
prontuarioroutes.get('/prontuario', new ProntuarioController().get);
prontuarioroutes.put('/prontuario/:id', new ProntuarioController().update);
prontuarioroutes.delete('/prontuario/:id', new ProntuarioController().delete);

module.exports = prontuarioroutes;