//instiates express
var express = require('express')

//import
var app = express()
var bodyParser = require('body-parser');
var sqlDAO = require("./sqlDAO")
const path = require('path');

//Sets up view
app.set('view engine', 'ejs')

//configuartion,1st sends build file from server too browser,2nd one sends static file from server too browser
app.use(express.static(path.join(__dirname, '../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {//call back function
    res.render("index.ejs")// links to different pages
})

//displays sql Data for sqlDAO.js
app.get("/countries", (req, res) => {
    sqlDAO.getCountries()
        .then((result) => {
            res.render("countries", { countries: result })
        })
        .catch((error) => {
            res.send(error)
        })
})

//gets citys route and calls sql queary from DAO
app.get("/citys", (req, res) => {
    sqlDAO.getCities()
        .then((result) => {
            res.render("citys", { citys: result })
        })
        .catch((error) => {
            res.send(error)
        })
})

app.get("/headsOfState", (req, res) => {
    mongoDAO.getHeadsOfState()
        .then((documents) => {
            res.render('headsOfState', { getHeadsOfState: documents })
        })
        .catch((error) => {
            res.send(error)
        })
})



app.listen(3000, () => {
    console.log("Listening  on Port 3000")
})