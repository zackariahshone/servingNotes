
const http = require("http");
const PORT = 8080;

function handleRequest(request, response) {
//express routes and what gets return here
  
  response.end("It Works!! Path Hit: " + request.url);
}


//create functions for requests to send back to the front end

const server = http.createServer(handleRequest);


server.listen(PORT, function() {

 
  console.log("Server listening on: http://localhost:" + PORT);
});
