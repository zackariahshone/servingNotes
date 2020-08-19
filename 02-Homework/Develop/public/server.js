
const express = require('express');
const app = express();
const router = require('express').Router();
const http = require("http");
let path = require('path');
//const { response } = require('express');

const PORT = 8080;

//Make shift data idealy add more as we progress: 
const strtData = [{
    routeName: 'kit',
    routeBody: 'is the greatest',
    
},
{
    routeName: 'NoteOne',
    routeBody: 'this is the body of the note',
    routeName: 'noteone'
}]



app.get('/', function(req, res){
   return res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/notes', function(req, res){
    return res.sendFile(path.join(__dirname, '/notes.html'))
});

app.get('/api/notes', function(req, res){
      return  res.sendFile(path.join(__dirname,'../db/db.json'));
});

app.get('/data' , function(req,res){
    return res.json(strtData);
});
//create functions for requests to send back to the front end



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   
  });
