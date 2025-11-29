import{createAuditoria, getAuditoria, updateAuditoria, deleteAuditoria} from "../services/Auditoriaservices.js";

class AuditoriaController {
    async create (req, res){
        try {
            const data = req.body
            const result = await createAuditoria (data)
            return res.status (201).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao criar auditoria'})
        }
    }

    async get (req, res){
        try {
            const result = await getAuditoria ()
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao buscar auditorias'})
        }   
    }
    async update (req, res){
        try {
            const id = parseInt (req.params.id)
            const data = req.body
            const result = await updateAuditoria (id, data)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao atualizar auditoria'})
        }
    }
    async delete (req, res){
        try {
            const id = parseInt (req.params.id)
            const result = await deleteAuditoria (id)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao deletar auditoria'})
        }
    }
}
module.exports = AuditoriaController;