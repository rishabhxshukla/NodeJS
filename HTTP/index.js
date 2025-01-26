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

//Port
const port = 3000;

//Creating server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Sample response");
    res.end();
});


//Listening to server
server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});