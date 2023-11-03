//Aluno: Victor Moreira RA:2503581
const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
})

const TasksModel = sequelize.define("Tasks",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    texto:{
        type: DataTypes.STRING,
        allowNull: false
    },
    obs:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    sequelize: sequelize,
    TasksModel: TasksModel
}