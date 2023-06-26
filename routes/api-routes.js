const router = require("express").Router();
const { readFromFile, readAndAppend, readAndDelete } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)))
})

router.post("/notes", (req, res) => {
    let newNote = { title: req.body.title, text:req.body.text, id:uuid() }
    readAndAppend(newNote, "./db/db.json")
    res.json("success")
})

router.delete("/notes/:id", (req, res) => {
    readAndDelete(req.params.id, "./db/db.json")
    res.json("success")
})

module.exports = router