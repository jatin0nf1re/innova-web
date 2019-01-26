var express = require("express");
var app= express();

var port = process.env.PORT || 8080;

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
});

app.get("/competitions", function(req,res){
  res.render("competitions");
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
