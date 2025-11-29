const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient()
const Paciente = prisma.pacientes

    const createPaciente = async(data) =>{
        const result = await Paciente.create({data})
        return result
    }   
    const getPaciente = async() =>{

        const result = await Paciente.findMany()
        return result
    }
    const updatePaciente = async(id, data) => {
        const result = await Paciente.update({
            where: { id: id },
            data: data
        });
        return result;
    }
    const deletePaciente = async(id) => { 
        const result = await Paciente.delete({
            where: { id: id }
        });
        return result;
    }
module.exports ={createPaciente, getPaciente, updatePaciente, deletePaciente}
