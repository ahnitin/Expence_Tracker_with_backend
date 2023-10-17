const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
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
    const id = req.params.id;
    const price = req.body.price;
    const description = req.body.description;
    const option = req.body.option;
    console.log(id,price,description,option)
    con.query('insert into expence values(?,?,?,?)',[id,price,description,option],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Posted");
        }
    })
})

app.put("/update/:id",(req,res,next)=>{
    const uid = req.params.id;
    const price =req.body.price;
    const description = req.body.description;
    const option = req.body.option;

    con.query("UPDATE expence SET price=?,description=?,option=? WHERE id=?",[price,description,option,uid,],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Updated");
        }
    });
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