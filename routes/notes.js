const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

// GET Route for retrieving all the notes
notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new notes
notes.post("/", (req, res) => {
    console.log(req.body);
  
    const { title,text } = req.body;
  
    if (req.body) {
      const newNote = {
        id: uuidv4(),
        title,
        text,
      };
  
      readAndAppend(newNote, "./db/db.json");
      res.json("Note added successfully 🚀");
    } else {
      res.error("Error in adding note");
    }
  });
  
  module.exports = notes;