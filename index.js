//instiates express
var express = require('express')

var app = express()

app.get('/', (req,res) => {//call back function
    res.send("<h1>List Countries</h1>")
})

app.listen(3000, () => {
    console.log("Listening  on Port 3000")
})