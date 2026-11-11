const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render('index', {
        title: 'titulo'
    })
})

app.use((req, res) => {
    res.send('Pagina nao encontrada!')
})


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))