const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const Auditoria = prisma.auditorias
    const createAuditoria = async(data) =>{
        const result = await Auditoria.create({data})
        return result
    }
    const getAuditoria = async() =>{
        const result = await Auditoria.findMany()
        return result
    }
    const updateAuditoria = async(id, data) => {
        const result = await Auditoria.update({
            where: { id: id },
            data: data  
        });
        return result;
    }
    const deleteAuditoria = async(id) => {  
        const result = await Auditoria.delete({
            where: { id: id }
        });
        return result;
    }
module.exports ={createAuditoria, getAuditoria, updateAuditoria, deleteAuditoria}