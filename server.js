var express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const parser = require('body-parser');


var array = [];

app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('index', {data: array});
})

app.post('/add', (req, res)=>{
    var query = req.body;
    
    array.push(query);

    res.redirect('/');
})

app.listen(port, (req, res)=>{
    console.log("Server is up and running on port "  + port);
})