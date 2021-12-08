//code not complete

const express = require('express')
const session = require('express-session')
const MongoDBSession = require('mongodb-session')
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost:27017/sessions",{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true}).then({res} => {
    console.log("MongoDB Connected")
})

const store = new MongoDBSession({
    uri:"mongodb://localhost:27017/sessions",
    collections:"mysessions"
})

app.use(session({
    secret:  'key that will sign cookie',
    resave:false,
    saveUninitialized:false,
    store:store
}))

app.get("/",(req,res) =>{
    console.log(req.session)
    console.log(req.session.id)
    res.send("hello session tut:")
})



app.listen(5000,console.log("server running on http://localhost:5000"))