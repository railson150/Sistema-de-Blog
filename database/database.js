const Sequelize = require('sequelize')

const senhaBanco = ''
const connection = new Sequelize('sistemablog', 'root', senhaBanco, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection