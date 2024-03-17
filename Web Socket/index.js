/*
Web Socket is used to fetch realtime data continuously.

NPM package : https://www.npmjs.com/package/ws

Run this file and open localhost in your browser :
    ws://localhost:3000/
*/


const express = require("express");
const app = express();
const ws = require("ws");


/* Home page */
app.get("/", (req, res) => {
    res.send("Use postman to send websocket responses.");
});


/* Starting the server */
const server = app.listen(3000, () => {
    console.log("Server started...");
});


/* Creating a socket */
const socket = new ws.WebSocketServer({ server });


/* WebSocket connection handling */
socket.on('connection', (ws) => {
    console.log("Client connected!");

    //Send a welcome message to the client
    ws.send("Welcome to the WebSocket server!");

    //Handle messages from the client
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);

        //Broadcast the received message to all clients
        socket.clients.forEach((client) => {
            if (client !== ws && client.readyState === ws.OPEN) {
                client.send(`Broadcast: ${message}`);
            }
        });
    });

    //Handle disconnection
    ws.on('close', () => {
        console.log("Client disconnected!");
    });
});