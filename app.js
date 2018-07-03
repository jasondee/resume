var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/resume", function(req, res){
    res.render("resume");
});

app.get("/web", function(req, res){
    res.render("web");
});

app.get("*", function(req, res){
    res.render("Undefined Path: You have ventured beyond the map.");
});

app.listen(process.env.PORT, process.env.IP);

console.log("Rattle on.");