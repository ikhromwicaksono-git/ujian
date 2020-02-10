const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const { productRouter, categoriesRouter, productCatRouter } = require('./router/index')
const port = 5000;

app.get('/', (req,res) => {
    res.status(200).send(`<h1>Ujian BackEnd<h1>`)
})
app.use(bodyParser())

app.use('/',productRouter);
app.use('/',categoriesRouter);
app.use('/',productCatRouter);
app.listen(port, () => {
    console.log(`app start at port : ${port}`);
    
})