const express = require("express");
const app = express();
//used to create random names
const faker = require('faker');

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes 
app.get("/", function(req, res){
//   res.send("it works!");
   
   //faker package
   let name = faker.name.firstName();
   //pass random name the view
   res.render("index.html", {name: name});
});

//routes 
app.get("/Example", function(req, res){
   //faker package
   let name = faker.name.firstName();
   //pass random name the view
   res.render("Example.html", {name: name});
});

//routes 
app.get("/features", function(req, res){
   //faker package
   let name = faker.name.firstName();
   //pass random name the view
   res.render("Features.html", {name: name});
});

//routes 
app.get("/History", function(req, res){
   //faker package
   let name = faker.name.firstName();
   //pass random name the view
   res.render("History.html", {name: name});
});

//server listeners 
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Express Server is running");
});