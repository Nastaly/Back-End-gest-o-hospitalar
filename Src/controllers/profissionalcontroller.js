const {createProfissional, getProfissional, updateProfissional, deleteProfissional} = require('../services/Profissionalservices.js');

class ProfissionalController {
    async create (req, res){
        try {
            const data = req.body
            const result = await createProfissional (data)
            return res.status (201).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao criar profissional'})
        }
    }
    async get (req, res){
        try {
            const result = await getProfissional ()
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao buscar profissionais'})
        }
    }
    async update (req, res){
        try {
            const id = parseInt (req.params.id)
            const data = req.body
            const result = await updateProfissional (id, data)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao atualizar profissional'})
        }
    }
    async delete (req, res){
        try {
            const id = parseInt (req.params.id)
            const result = await deleteProfissional (id)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao deletar profissional'})
        }
    }
}

module.exports = ProfissionalController;


