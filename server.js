const Websocket = require("ws");
const server = new Websocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log("Recieved message => ${message}");
    server.clients.forEach((client) => {
        if (client.readyState == Websocket.OPEN) {
            client.send(message);
        }
    });
  });
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});
