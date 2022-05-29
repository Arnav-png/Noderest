const express = require("express")
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const foodModel = require('./models/Food')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://crudClusterUser:crud@crudcluster.bkg5q.mongodb.net/CrudFoodDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.post('/food',async(req,res)=>{

    const foodName = req.body.foodName
    const Days = req.body.Days

    var food = new foodModel({
        foodName:foodName,
        daysSinceIAte:Days
    })

    try {
        await food.save()
        res.send("data saved")
    } catch (err) {
        console.log(err)
        res.send("Oops cannot record data") 
    }
})

app.get('/foodDetails',async(req,res)=>{

    foodModel.find({}, 'daysSinceIAte foodName',(err,result)=>{
        if(err){
            res.send(err)
        }

        res.send(result)
    })
})


app.listen(3001,()=>{
    console.log('App listening on port 3001')
})