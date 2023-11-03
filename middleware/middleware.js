const TasksBD = require('../model/Tasks');
//função para a validação de dados na criação
function validaTask(req, res, next){
    const {titulo, texto, obs} = req.body
    if(!titulo || !texto || !obs){
        return res.status(400).json({
            mensagem: "Dados de entrada inválidos"
        });
    }
    next()
}
async function validaID(req, res, next){
    const id = req.params.id
    if(id == null){
        return res.status(400).json({
            mensagem :"Não é possivel buscar um ID nulo"
        })
    }
    const task = await TasksBD.buscarID(id)
    if(!task){
        return res.status(400).json({
            mensagem :"Valor não encontrado, por favor verifique"
        })
    }
    next()
}
module.exports = {
    validaTask: validaTask,
    validaID: validaID
}