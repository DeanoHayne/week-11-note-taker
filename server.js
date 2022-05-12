// Dependencies
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// Setting up server
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

app.use(express.static('public'));

// API route for "GET" request
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/db/db.json'))
);

// API route for "POST" request
app.post('/api/notes', (req, res) => {
    // save a new note based on the incoming req body
    // title comes from req.body.title
    // note body comes from req.body.text
    // generate a unique notes id for the new note
    const uniqueId = uuidv4();
    const newNotes = {
        id: uniqueId,
        title: req.body.title,
        text: req.body.text,
    }:
);

// add the new notes to the existing notes array in db.json


// resave the db.json with updated notes


// send back a response to browser






// // API route for "DELETE" request


// // HTML routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'notes.html'));
// });


// Listening
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)

);
