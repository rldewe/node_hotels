const mongoose = require('mongoose');

// Schema creation
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

// Create a model named Person
const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
