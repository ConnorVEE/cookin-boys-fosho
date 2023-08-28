const mongoose = require('mongoose');

recipeSchema = mongoose.Schema({
    name: {type: String},
    picture: {type: String},
    description: {type: String}
})