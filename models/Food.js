const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true
    },
    daysSinceIAte:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default: Date.now() 
    }
})

const food = mongoose.model('food',foodSchema)
module.exports = food


