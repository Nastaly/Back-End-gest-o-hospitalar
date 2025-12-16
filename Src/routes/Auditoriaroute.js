const express = require('express');
const AuditoriaController = require('../controllers/Auditoriacontrollers');
const auditoriaroutes = express.Router();

auditoriaroutes.post('/auditoria', new AuditoriaController().create);
auditoriaroutes.get('/auditoria', new AuditoriaController().get);
auditoriaroutes.put('/auditoria/:id', new AuditoriaController().update);
auditoriaroutes.delete('/auditoria/:id', new AuditoriaController().delete);

module.exports = auditoriaroutes;