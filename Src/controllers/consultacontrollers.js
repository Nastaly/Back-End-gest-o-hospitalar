import {createConsulta, getConsulta, updateConsulta, deleteConsulta} from  '../services/ConsultaService.js';

class ConsultaController {
    async createConsulta(req, res) {
        try {
            const consultaData = req.body;
            const newConsulta = await createConsulta(consultaData);
            res.status(201).json(newConsulta);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create consulta' });
        }   
    }

    async getConsulta(req, res) {   
        try {
            const consultaId = req.params.id;
            const consulta = await getConsulta(consultaId);
            if (consulta) {
                res.status(200).json(consulta);
            } else {
                res.status(404).json({ error: 'Consulta not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve consulta' });
        }
    }

    async updateConsulta(req, res) {        
        try {
            const consultaId = req.params.id;
            const consultaData = req.body;
            const updatedConsulta = await updateConsulta(consultaId, consultaData);
            if (updatedConsulta) {
                res.status(200).json(updatedConsulta);
            }
            else {  
                res.status(404).json({ error: 'Consulta not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update consulta' });
        }
    }

    async deleteConsulta(req, res) {    
        try {
            const consultaId = req.params.id;
            const deleted = await deleteConsulta(consultaId);
            if (deleted) {
                res.status(200).json({ message: 'Consulta deleted successfully' });
            } else {
                res.status(404).json({ error: 'Consulta not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete consulta' });
        }
    }
}
module.exports = ConsultaController;