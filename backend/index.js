//npm install mongodb

//nodemon index.js 
const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
var database

app.get('/', (req, resp) => {
    resp.send('Welcome to Mongodb API')
})

app.listen(8080, () => {
    MongoClient.connect('mongodb://localhost:2707', { useNewUrlParser: true}, (error, result) => {
        if (error) throw error
        database = result.db('vrra')
        console.log("Connection Successful")
    })
})