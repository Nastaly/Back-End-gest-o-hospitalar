const { createPaciente, getPaciente, updatePaciente, deletePaciente } = require('../services/Pacienteservices');

class PacienteController {
    async create (req, res){
        try {
            const data = req.body
            const result = await createPaciente (data)
            return res.status (201).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao criar paciente'})
        }
    }
    
    async get (req, res){
        try {
            const result = await getPaciente ()
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao buscar pacientes'})
        }   
    }

    async update (req, res){
        try {
            const id = parseInt (req.params.id)
            const data = req.body
            const result = await updatePaciente (id, data)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao atualizar paciente'})
        }
    }

    async delete (req, res){
        try {
            const id = parseInt (req.params.id)
            const result = await deletePaciente (id)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao deletar paciente'})
        }    
    }
}
module.exports = PacienteController;
