const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    Name:{
        type : String,

    },
     authorid :{
         type:String,
        //  required: true
     },
        prices: Number,
        ratings: Number

    },
   
     
 { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
