//Aluno: Victor Moreira RA:2503581
var express = require('express');
var router = express.Router();
const {sequelize} = require('../model/bd');
const TasksBD = require('../model/Tasks');
const {validaTask, validaID} = require('../middleware/middleware')

//Test 
router.get("/install", async (req, res)=>{
    await sequelize.sync({
        force: true
    })
    res.json({
        msg: "banco criado"
    })
})

//Inicial
router.get("/", async (req, res) => {
    //await sequelize.sync()
    try{
        const listar = await TasksBD.listar()
        res.json({
            Tarefas: listar
        })
    }catch(e){
        res.status(500).json({
            mensagem: "Erro ao listar"
        })
    }    
});

//Criar
router.post("/", validaTask, async(req, res)=>{
    const {titulo, texto, obs} = req.body
    try{
        var tasks = await TasksBD.criar(titulo, texto, obs)
        res.json({
            Tasks: tasks
        })
    }catch(e){
        res.status(500).json({
            mensagem: "Erro ao criar uma nova tarefa"
        })
    }
})

//Atualizar
router.put("/:id", validaID, validaTask, async(req, res)=>{
    const id = req.params.id
    try{
        const upt = await TasksBD.atualizar(req.body, id)
        res.json({
            Tasks: upt
        })
    }catch(e){
        res.status(500).json({
            mensagem: "Erro ao atualizar a tarefa"
        })
    }
})

//Buscar por ID

router.get("/:id", validaID, async(req, res)=>{
    const id = req.params.id
    try{
        const task = await TasksBD.buscarID(id)
        res.json({
            task: task
        })
    }catch(e){
        res.status(500).json({
            mensagem: "Erro ao buscar tarefa, verifique o ID"
        })
    }
})

//Deletar

router.delete("/delete/:id", validaID, async(req, res)=>{
    const id = req.params.id
    try{
        const task = await TasksBD.deletar(id)
        res.json({
            mensagem: "Tarefa deletada com sucesso"
        })
    }catch(e){
        res.status(500).json({
            mensagem: "Falha ao excluir tarefa"
        })
    }
})


module.exports = router