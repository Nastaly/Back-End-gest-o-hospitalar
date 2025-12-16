const {createUsuario, getUsuario, updateUsuario, deleteUsuario} = require('../services/Usuarioservices.js');

class UsuarioController {
    async create (req, res){
        try {
            const data = req.body   
            const result = await createUsuario (data)
            return res.status (201).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao criar usuario'})
        }
    }

    async get (req, res){
        try {
            const result = await getUsuario ()
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao buscar usuarios'})
        }   
    }
    async update (req, res){
        try {
            const id = parseInt (req.params.id)
            const data = req.body
            const result = await updateUsuario (id, data)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao atualizar usuario'})
        }
    }

    async delete (req, res){
        try {
            const id = parseInt (req.params.id)
            const result = await deleteUsuario (id)
            return res.status (200).json (result)
        } catch (error) {
            console.error (error)
            return res.status (500).json ({error: 'Erro ao deletar usuario'})
        }
    }
}
module.exports = UsuarioController;