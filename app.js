const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var options = {
    weekday : "long",
    day : 'numeric',
    month : 'long'
  }
  var day = today.toLocaleString("en-US",options);
  
  res.render("list", { today: day });
});


app.post('/',function(req,res){
    req.body.addItem;
});

app.listen(3000,function(){
    console.log("Server is running on 3000");
})