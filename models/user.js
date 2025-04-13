const mongoose = require('mongoose')

//schema design
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'name is required'],
    },
    eamil:{
        type:String,
        required:[true,'email is required and should unique'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
},
    {timestamps: true}

);

const user = mongoose.model('users', userschema)
module.exports = user