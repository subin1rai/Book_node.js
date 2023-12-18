//importing node express
const express = require('express');
const app = express();

// const ejs = require('ejs');


// app.use('/',(req, res) => {
    // res.json({message: "Hello world"});


app.set("view engine", "ejs");   // to show form node.js

app.get("/",(req,res) => res.render("pages/index"));

// } );
app.listen(8000);
