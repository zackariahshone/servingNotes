
const express = require('express');
const app = express();

//const router = require('express').Router();
//const http = require("http");
let path = require('path');
const { read, write, getNotes} = require('./public/assets/js/store');



//const htmlRoutes = require("/routes/public/assets")
// const apiRoutes = require("/routes/db/db.json")
const PORT = process.env.PORT || 8080;


app.use(express.static('public'));
//app.use('/api', routes);
//app.use()
//app.use(express.static(path.join(__dirname,'routes')));


//const { response } = require('express');

// const PORT = 8080;

//Make shift data idealy add more as we progress: 


app.get('/', function(req, res){
   return res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', function(req, res){
    return res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', function(req, res){
      return  res.sendFile(path.join(__dirname,'./public/db/db.json'));
});

// app.get('/api/notes' , function(req,res){
//     return res.json(strtData);
// });
//create functions for requests to send back to the front end

app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newNote = req.body;
   console.log(newNote);
    console.log(newNote);
    write(newNote);

  });

app.listen(PORT, function() {
    console.log(__dirname);
    console.log("App listening on PORT " + PORT);
   
  });
