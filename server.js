const express = require("express");
const cors = require("cors");
const getQR = require("./route/getQR");
const getToken = require("./route/getToken");
const scanPerson = require("./route/scanPerson");
const getAllScanned = require("./route/getAllScanned");
const app = express();
require("dotenv").config();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
const port = process.env.PORT || 3000;
app.set("socketio", io);

app.use(cors());
app.use(express.json());

app.get("/getQR", getQR);
app.post("/getToken", getToken);
app.post("/scanPerson", scanPerson);
app.get("/getAllScanned", getAllScanned);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
