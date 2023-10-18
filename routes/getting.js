const express = require('express');
const BodyParser = require("body-parser");
const sequelize = require("../helper/database");
const Expence = require("../models/createtable");
const router = express.Router();

router.get("/get",async (req,res,next)=>{
    try{
        const expences = await Expence.findAll();
        res.status(200).json({allexpences:expences});
    }
    catch(err)
    {
        console.log("Get Expences Failing",JSON.stringify(obj))
        res.status(500).json({
            err:err
        })
    }
})
module.exports = router;