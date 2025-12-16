const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient()
const Estoque = prisma.estoques
    const createEstoque = async(data) =>{
        const result = await Estoque.create({data})
        return result
    }
    const getEstoque = async() =>{
        const result = await Estoque.findMany()
        return result
    }   
    const updateEstoque = async(id, data) => {
        const result = await Estoque.update({
            where: { id: id },  
            data: data
        });
        return result;
    }
    const deleteEstoque = async(id) => {
        const result = await Estoque.delete({
            where: { id: id }
        });
        return result;
    }
module.exports ={createEstoque, getEstoque, updateEstoque, deleteEstoque}