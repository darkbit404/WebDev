const http = require("http");
//Server listens to the incoming requests.
//http module gives access to the function createServer which is used to create a server.
//createServer allows to create a server which helps to listen the requests.
//function helps to handle the logic of the request made by the client.
const server = http.createServer(function (req, res){
     if(req.url === "/getSecretData"){
          res.end("Youe are not allowed here!")
     }
     res.end("Hello Word!");
});

/*.listen is used to start the server created i.e. server in this case and listen to the 
helps i tlisten for any incoming connections ona a speific port.*/
server.listen(2424);