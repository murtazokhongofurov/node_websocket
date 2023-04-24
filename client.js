const Websocket = require("ws");
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = new Websocket("ws://localhost:8080");

socket.on("message", (message) => {
    console.log("Recived message: ${message}");
});

r1.on("line", (input) => {
    socket.send(input)
});