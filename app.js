const express = require('express');
const bodyParser = require('body-parser');
const PORT = 1313;

const app = express();
const adminRouter = require('./Routes/admin');

const mongoose = require('mongoose');
const db = "mongodb+srv://Akshay13:Akshay13@cluster0-6bsem.mongodb.net/test";
mongoose.connect(db, error => {
    if(error){
        console.log("Error?", error)
    }else{
        console.log('Connected to DB')
    }
});

app.use(bodyParser.json());
app.use('/api', adminRouter);

app.listen(PORT, () => {
    console.log('App Started on Port', PORT);
});