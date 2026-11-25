function index(req, res) {
    res.render('index', {
        title: 'titulo'
    })
}



module.exports = {
    index
}