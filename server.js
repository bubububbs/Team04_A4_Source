const express = require('express');
const fs = require("fs");
const app = express();

const PORT = 3008;

let items = JSON.parse(fs.readFileSync("./items.json"));
// console.log(items);

// app.use((req,res,next) => {
//     console.log(`Method: ${req.method}, URL: ${req.url}`)
//     next();
// });

// for png js css
app.use(express.static("./"));

app.get("/", (req, res) => {
    res.sendFile("home.html", {root: __dirname});
});

app.get("/search", (req, res) => {
    res.sendFile("search.html", {root: __dirname});
});

app.get("/items.json", (req, res) => {
    res.json(items);
})

app.listen(PORT);
console.log("Server listening at http://localhost:" + PORT);