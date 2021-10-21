const express = require("express");

//Import notes route
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

// TODO: Initialize diagnostics route

module.exports = app;