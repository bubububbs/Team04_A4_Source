const express = require('express');
const app = express();

const PORT = 3008;

app.use(express.static("./"));

app.get("/", (req, res) => {
    res.sendFile("home.html", {root: __dirname});
});

app.get("/search", (req, res) => {
    res.sendFile("search.html", {root: __dirname});
});

app.listen(PORT);
console.log("Server listening at http://localhost:" + PORT);