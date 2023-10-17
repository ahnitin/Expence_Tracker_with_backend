const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
app.use(express.json());
const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "good@123",
    database: "resturant_menu"
})

con.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("connected");
    }
})

app.post('/post',(req,res,next)=>{
    const price = req.body.price;
    const description = req.body.description;
    const option = req.body.option;

    con.query('insert into expence values(?,?,?)',[price,description,option],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Posted");
        }
    })
})


app.listen(3000,(err)=>{
    if(err)
        {
            console.log(err);
        }
        else{
            console.log("On port 3000");
        }
});