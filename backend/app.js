const express = require("express");
const serversController = require("./controllers/servers-controller");
const server = express();
const cors = require('cors');
const errorHandler = require("./errors/error-handler");

server.use(cors({ origin: 'http://localhost:3000' }));
server.use(express.json());
server.use("/servers", serversController);
server.use(errorHandler);
server.listen(3001, () => console.log(`Listening on http://localhost:3001`));