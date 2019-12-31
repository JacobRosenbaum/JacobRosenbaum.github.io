var express = require("express");
var path = require("path");
var fs = require("fs")
var app = express();
var PORT = process.env.PORT || 3001;
let notes = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    return res.json(notes);
});
var savedNotes = fs.readFileSync("db/db.json", "utf-8");
if (savedNotes) {
    var oldNotes = JSON.parse(savedNotes);
    notes = oldNotes;
} else {
    notes = [];
}
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
    assignID();
    fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), function(err) {
        if (err) {
            throw err
        }
    })
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

function assignID() {
    for (var i = 0; i < notes.length; i++) {
        notes[i].id = i;

    }
};
app.delete("/api/notes/:id", function(req, res) {
    const targetNote = parseInt(req.params.id);
    notes.splice(targetNote, 1);
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = i;
    }
    let stringifiedNotes = JSON.stringify(notes, null, 2);
    fs.writeFile("db/db.json", stringifiedNotes, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The note was deleted");
    });
    res.sendFile(path.join(__dirname, "public/notes.html"));
});