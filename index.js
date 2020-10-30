const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log("Servidor rodando")
})