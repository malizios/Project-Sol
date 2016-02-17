/*eslint-disable no-console*/
"use strict";

const port = 3000;
const io = require("socket.io").listen(port);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
