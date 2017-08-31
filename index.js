var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");
var morgan = require("morgan");
var moment = require("moment");

var app = express();
app.listen(3000);
app.set("view engine","pug");

var accessLogStream = fs.createWriteStream("accessLog.log", {flag: 'a'});
app.use(morgan('combined',{stream:accessLogStream}) );

app.use("/",bodyParser.urlencoded({extended:false}) );

app.use("/assets",express.static(__dirname+"/public"));

//app.get(url,what to do with this url)
app.get("/form",function (req,res) {
    res.sendFile(path.join(__dirname,"/public/form.html"));
});

app.post("/submit",function (req,res) {
    const nm = req.body.fn;
    var dob = req.body.dob;

    const difference = moment().diff(dob,'days');
    res.render("submit",{name:nm, x:difference});
});