//Aluno: Victor Moreira RA:2503581
const {TasksModel} = require("./bd")

module.exports = {
    criar: async (titulo, texto, obs)=> {
        try {
            //console.log(nome, obs)
            const newTask = await TasksModel.create({titulo:titulo, texto: texto, obs: obs});
            console.log(newTask)
            return newTask;
            
        } catch (err) {
            // console.log(err);
            return null;
        }
    },
    atualizar: async (Tasks, id) => {
        return await TasksModel.update(Tasks, {
            where:{id:id}
        })
    },
    listar: async()=> {
        return await TasksModel.findAll()
    },
    buscarID: async(id)=>{
        return await TasksModel.findByPk(id)
        
    },
    deletar: async(id)=>{
        return await TasksModel.destroy({
            where: {id:id}
        })
    }
}