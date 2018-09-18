'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.set('port',(process.env.PORT || 3000));

//allows us to process data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


//Routes

app.get("/" , function(req, res){
  res.send("hi im a cahat bot");
});

//facebook

app.get('/webhook/' , function(req, res){
  //api token
  if (req.query["hub.verify_token"] === ""){
    res.send(req.query["hub.challenge"]);
  }else
  res.send("wrong token");
});

app.listen(app.get("port"), function(){
  console.log("server is running");
});
