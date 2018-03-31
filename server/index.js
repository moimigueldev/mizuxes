require("dotenv").config({
    path:"./env"
});

let express = require("express");
let app = express();
let path = require("path");
let port = process.env.PORT || 3000;
let bodyParser = require("body-parser");


// USES
app.use(express.static('src'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
    console.log("Server running..", port);
});


app.get("/", (req, res) => {
    console.log("Main URL Hit");

    res.sendFile(path.resolve("src/index.html"));
});
