const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient()
const Profissional = prisma.profissionais
    const createProfissional = async(data) =>{
        const result = await Profissional.create({data})
        return result
    }       
    const getProfissional = async() =>{
        const result = await Profissional.findMany()
        return result
    }
    const updateProfissional = async(id, data) => {
        const result = await Profissional.update({
            where: { id: id },
            data: data
        });
        return result;
    }   
    const deleteProfissional = async(id) => { 
        const result = await Profissional.delete({
            where: { id: id }
        });
        return result;
    }
module.exports ={createProfissional, getProfissional, updateProfissional, deleteProfissional}