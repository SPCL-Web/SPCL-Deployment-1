

// // const express = require('express');
// import express from 'express';
// import cors from 'cors';
// import  dotenv  from 'dotenv';
// import dbConnect from './config/db.js'
// import authRoutes from './routes/authRoutes.js'
// import path from 'path'



// const app = express();


// // load config from env file

// dotenv.config();
// const PORT = process.env.PORT || 4000;

// //middleware. to parse json request body - Help TO pass data from the body.

// app.use(express.json());
// app.use(cors());

// app.use(express.static(path.join(__dirname,'./client/build')))


// // mount the todo ASPI routes


// // const todoRoutes = require("./routes/todos")______________________________________________
// // app.use("/api/v1", todoRoutes)________________________________________________________


// app.listen(PORT,()=>{
//     console.log(`Sevver Started successfully at ${PORT}`);
// });

// // connectes to the database
// app.use('/api/v1',authRoutes)


// // const dbConnect = require("./config/db");
// dbConnect();



// // app.use(express.static(path.join(__dirname,'./client/build')))
// // app.get('*',function(req,res){
// //     res.sendFile(path.join(__dirname,"./client/build/index.html"));
// // })

// app.use('*', function(req,res){
//     res.sendFile(path.join(__dirname,"./client/build/index.html"));
// })


// // default Route
// app.get("/", (req, res) =>{
//     res.send(`<h1>This is Home Page</h1>`);

// })

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Load config from .env file
dotenv.config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body and enable CORS
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './client/build')));

// Mount the API routes
app.use('/api/v1', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// Connect to the database
dbConnect();

// Serve the React application
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send(`<h1>This is the Home Page</h1>`);
});






