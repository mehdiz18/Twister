const express = require("express");
const colors = require("colors");
const app = require("./src/app");
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`[Server] Listening on port ${PORT}`.cyan);
});
