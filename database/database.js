const Sequelize = require('sequelize')

const passwordDataBase = ''
const connection = new Sequelize('sistemablog', 'root', passwordDataBase, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection