const express = require('express');
const BodyParser = require("body-parser");
const sequelize = require("../helper/database");
const Expence = require("../models/createtable");
const router = express.Router();

router.delete('/delete/:id', async (req,res,next)=>{
    try{
        const id  = req.params.id;
        console.log(id);
        await Expence.destroy({
            where:{
                id:id
            }
        })
        res.status(200);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
            err:err
        })
    }
})
module.exports= router;