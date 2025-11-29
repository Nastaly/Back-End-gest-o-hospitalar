import{createEstoque, getEstoque, updateEstoque, deleteEstoque} from "../services/Estoqueservices.js";

class EstoqueController {
    async create (req, res){
        try {
            const data = req.body
            const result = await createEstoque (data)
            return res.status (201).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao criar estoque'})
        }
    }
    async get (req, res){
        try {
            const result = await getEstoque ()
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao buscar estoques'})
        }
    }
    async update (req, res){
        try {
            const id = parseInt (req.params.id)
            const data = req.body
            const result = await updateEstoque (id, data)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao atualizar estoque'})
        }
    }
    async delete (req, res){
        try {
            const id = parseInt (req.params.id)
            const result = await deleteEstoque (id)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao deletar estoque'})
        }
    }
}
module.exports = EstoqueController;