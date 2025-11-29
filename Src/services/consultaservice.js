const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient()
const Consulta = prisma.consultas
    const createConsulta = async(data) =>{
        const result = await Consulta.create({data})
        return result
    }
    const getConsulta = async() =>{
        const result = await Consulta.findMany()
        return result
    }   
    const updateConsulta = async(id, data) => {
        const result = await Consulta.update({
            where: { id: id },
            data: data
        });
        return result;
    }   
    const deleteConsulta = async(id) => { 
        const result = await Consulta.delete({
            where: { id: id }
        });
        return result;
    }   
module.exports ={createConsulta, getConsulta, updateConsulta, deleteConsulta}