const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const sequelize = require("./helper/database");
const Expence = require("./models/createtable");
const postingroute = require("./routes/posting");
const Gettingroute = require("./routes/getting");
const Deletingroute =require("./routes/deleting");
const errorController = require("./controllers/error");
app.use(BodyParser.urlencoded({extended: false}));
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use(postingroute);

app.use(Gettingroute);

app.use(Deletingroute);
console.log("happy")

app.use("/",(req,res,next)=>{
    res.status(404).send("<h1>PAGE NOT FOUND </h1>");
})




sequelize
.sync()
.then(res =>{
    app.listen(3000,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("Connected To Port 3000")
        }
    })
})
.catch(err=>{
    console.log(err);
})