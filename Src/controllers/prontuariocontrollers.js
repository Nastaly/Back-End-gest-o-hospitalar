import {createProntuario, getProntuario, updateProntuario, deleteProntuario} from "../services/Prontuarioservices.js";

class ProntuarioController {
    async create (req, res){
        try {
            const data = req.body
            const result = await createProntuario (data)
            return res.status (201).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao criar prontuario'})
        }   
    }

    async get (req, res){
        try {
            const result = await getProntuario ()
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao buscar prontuarios'})
        }   
    }
    async update (req, res){
        try {
            const id = parseInt (req.params.id) 
            const data = req.body
            const result = await updateProntuario (id, data)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao atualizar prontuario'})
        }
    }
    async delete (req, res){
        try {
            const id = parseInt (req.params.id)
            const result = await deleteProntuario (id)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao deletar prontuario'})
        }
    }
}
module.exports = ProntuarioController;