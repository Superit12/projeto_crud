const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

// conexao com banco de dados
db.connect()


// defindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
    


app.use('/', routes)

// error 404 NOT FOUND
app.use((req, res) => {
    res.send('Pagina nao encontrada!')
})



const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))