

// const express = require('express');
import express from 'express';
import cors from 'cors';
import  dotenv  from 'dotenv';
import dbConnect from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import path from 'path'



const app = express();


// load config from env file

dotenv.config();
const PORT = process.env.PORT || 4000;

//middleware. to parse json request body - Help TO pass data from the body.

app.use(express.json());
app.use(cors());


// mount the todo ASPI routes


// const todoRoutes = require("./routes/todos")______________________________________________
// app.use("/api/v1", todoRoutes)________________________________________________________


app.listen(PORT,()=>{
    console.log(`Sevver Started successfully at ${PORT}`);
});

// connectes to the database
app.use('/api/v1',authRoutes)


// const dbConnect = require("./config/db");
dbConnect();



app.use(express.static(path.join(__dirname,'../build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../build/index.html'));
})



// default Route
app.get("/", (req, res) =>{
    res.send(`<h1>This is Home Page</h1>`);

})







