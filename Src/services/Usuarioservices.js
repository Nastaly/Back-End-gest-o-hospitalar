const {prisma} = require('../database/prismaClient');
const Usuario = prisma.usuarios
    const createUsuario = async(data) =>{
        const result = await Usuario.create({data})
        return result
    }   
    const getUsuario = async() =>{
        const result = await Usuario.findMany()
        return result
    }
    const updateUsuario = async(id, data) => {
        const result = await Usuario.update({
            where: { id: id },
            data: data
        });
        return result;
    }   
    const deleteUsuario = async(id) => {
        const result = await Usuario.delete({
            where: { id: id }
        });
        return result;
    }   
module.exports ={createUsuario, getUsuario, updateUsuario, deleteUsuario}