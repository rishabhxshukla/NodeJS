/*
-> HTTP is connectionless, i.e. after making the request the client is disconnected from the server. 
When the response is ready, the server re-establishes the connection with the client and delivers the content.

-> HTTP is stateless, i.e. the client and the server know about each other during the time of current request only.
If the request closes, and they want to connect again, then they need to provide information to each other once again.

-> HTTP response message contains 3 sections : Status Code, Header, Body.

Run this file and open localhost in your browser :
    http://localhost:3000/
*/

const http = require('http');


//Creating server :
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Sample response");
    res.end();
});


//Listening server :
server.listen(3000, () => {
    console.log("Server started...");
});