//import to access mysql
var mysql = require('promise-mysql')

var pool

mysql.createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'geography'
})

    .then((result) => {
        pool = result
    })
    .catch((error) => {
        console.log(error)
    });
//gets  city table 
var getCitys = function () {
    //Return new promise
    return new Promise((resolve, reject) => {
        //function promise
        pool.query("select * from city")
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
//gets  countrys table 
var getCountrys = function () {
    //Return new promise
    return new Promise((resolve, reject) => {
        //function promise
        pool.query("select * from countries")
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

module.exports = { getCountrys,getCitys }
mongoDao
module.exports = {getHeadsOfState}




















/* var getCountries = function () {
    pool.query('select * from city')
        .then((result) => {
            console.log("OK")
            res.send(result)
        })
        .catch((error) => {
            console.log("NOK")
            res.send(error)
        })
    console.log("HERE1")
} */