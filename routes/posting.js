const express = require('express');
const BodyParser = require("body-parser");
const sequelize = require("../helper/database");
const Expence = require("../models/createtable");
const router = express.Router();

router.post('/post',async (req,res,next)=>{
   try{
    const price = req.body.price;
    const description = req.body.description;
    const option = req.body.option; 
    
    const data = await Expence.create({price:price,description:description,option:option});
    res.status(201).json({newexpence: data})
   }
   catch(err)
   {
    console.log(err);
    res.status(500).json({
        err:err
    })
   }
})

module.exports = router;