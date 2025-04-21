const express = require("express");

//Creating a new express.js application. 
//It's like creating a new webserver.
const app = express(); 

//Handling the requests
//app.use handles all the HTTP method API calls
app.use("/Home", (req, res) => {
    res.send("Hello. This is home route.")
});

app.use("/", (req, res) => {
    res.send("Hello. This is / route.")
});

app.use("/test", (req, res) => {
    res.send("Hello. This is test route.")
});

//This will handle only the GET call
app.get("/user", (req, res) => {
    res.send("Hello. This is user GET route.")
});

//This will handle only the POST call
app.post("/user", (req, res) => {
    res.send("Hello. This is user GET route.")
});

//Some advanced routing techniques
//Makes s optional. Hence it will work well for user also and uer also
app.post("/us?er", (req, res) => {
    res.send("Hello. This is user GET route.")
});

//We can add as many s as we want to using +. It will work fine for user also and usssser also and ussssssser also.
app.post("/us+er", (req, res) => {
    res.send("Hello. This is user GET route.")
});

//We can add anything in between in place of *. It will work for user also and usadfer also.
app.post("/us*er", (req, res) => {
    res.send("Hello. This is user GET route.")
});

//We call listen() to listen on some port so that users can connect to the server.
app.listen(3000, () => {
    console.log("Server active on port 3000.")
});