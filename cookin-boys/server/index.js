const express = require('express');
const app = express();

const mongoose = require('mongoose');
const recipeModel = require('../models/recipes.js');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
// The link to the MongoDB Atlas databse is what would go inbetween the quotes
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to Database')
})
.catch(() => {
    console.log('Connection error')
})

// Use bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

module.exports = app;
