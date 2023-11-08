const express = require("express");

const server = express();

server.get("/", (req, res) => res.send("<h1>Hello world</h1>"));

server.listen(4000, () => console.log("Server running on port 4000"));