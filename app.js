var express = require("express"),
    app= express();
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStratergy = require("passport-local");
    pssportLocalMongoose = require("passport-local-mongoose");

var port = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost/innova");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(require("express-session")({
  secret: "Innova is techfest of DTU",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//==========================================================
//Routes
//==========================================================
app.get("/",function(req,res){
  res.render("index");
});

app.get("/competitions", function(req,res){
  res.render("competitions");
});

app.get("/adminevents",isLoggedIn,function(req,res){
  res.render("adminevents");
});

//COMPETITIONS===================

//index
app.get




//==========================================================
//Auth Routes
//==========================================================

//show signup format
app.get("/register", function(req,res){
  res.render("register");
});

app.post("/register", function(req,res){
  User.register(new User({username:req.body.username}), req.body.password, function(err,user){
    if(err){
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req,res, function(){
      res.redirect("/adminevents");
    });
  });

});

//Login Routes
app.get("/login", function(req,res){
  res.render("login");
});

app.post("/login",passport.authenticate("local",{
  successRedirect: "/adminevents",
  failureRedirect: "/login"
}), function(req,res){
});

app.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}
//==============================================================
//==================================================


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
