const express = require("express");
const cors = require("cors");
const getQR = require("./route/getQR");
const getToken = require("./route/getToken");
const scanPerson = require("./route/scanPerson");
const getAllScanned = require("./route/getAllScanned");
const deleteScanner = require("./route/deleteScanner");
const app = express();
require("dotenv").config();

//Create a server by http protocol and socket.io
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

//Use library
app.set("socketio", io);
app.use(cors());
app.use(express.json());

//Connection with Route by get or post method
app.get("/getQR", getQR);
app.post("/getToken", getToken);
app.post("/scanPerson", scanPerson);
app.get("/getAllScanned", getAllScanned);
app.post("/deleteScanner", deleteScanner);

//Open port to run server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
