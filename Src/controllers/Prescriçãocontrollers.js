const {createPrescricao, getPrescricao, updatePrescricao, deletePrescricao} = require('../services/Prescriçãoservices.js');

class PrescricaoController {
    async create (req, res){
        try {
            const data = req.body
            const result = await createPrescricao (data)
            return res.status (201).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao criar prescricao'})
        }
    }
    async get (req, res){
        try {
            const result = await getPrescricao ()
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao buscar prescricoes'})
        }
    }
    async update (req, res){
        try {
            const id = parseInt (req.params.id)
            const data = req.body
            const result = await updatePrescricao (id, data)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao atualizar prescricao'})
        }
    }
    async delete (req, res){
        try {
            const id = parseInt (req.params.id)
            const result = await deletePrescricao (id)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao deletar prescricao'})
        }
    }
}
module.exports = PrescricaoController;