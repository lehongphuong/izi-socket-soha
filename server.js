// console.log('Server JS');

// // use express
// var express = require("express");

// // create instance of express
// var app = express();



// // use http with instance of express
// var http = require("http").createServer(app);

// // create socket instance with http
// var io = require("socket.io")(http, {
//     allowEIO3: true, // f,
//     cors: {
//         origin: "*",
//         credentials: true
//     }
// });

// // add listener for new connection
// io.on("connection", function (socket) {
//     // this is socket for each user
//     console.log("User connected", socket.id);

//     // server should listen from each client via it's socket
//     socket.on("new_message", function (data) {
//         console.log("Client says", data);

//         // server will send message to all connection client
//         // send same message back to all user
//         io.emit('new_message', data);

//     });
// });

// app.get("/", function (request, result) {

// }); 

// // start the server
// var port = 34567;
// http.listen(port, function () {
//     console.log("Listening to port " + port);
// });


'use strict';

const express = require('express'); 

// create socket instance with http
var socketIO = require("socket.io")(http, {
    allowEIO3: true, // f,
    cors: {
        origin: "*",
        credentials: true
    }
});

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
    .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    console.log("Client says", data);

    // server will send message to all connection client
    // send same message back to all user
    io.emit('new_message', data);
    socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);