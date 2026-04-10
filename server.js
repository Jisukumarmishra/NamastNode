const http = require("node:http");

const server = http.createServer(function(req, res){

if(req.url === "/getSecretData") {
  res.end("There Is No Secret Data");
}
res.end(" Hello World Now I am Awakened At This Server!")

});

server.listen(7777);