var express = require("express");
var cors=require("cors")
var app = express();
app.use(cors());

app.post("/", function(request, response){
    console.log("Привет");
    var x=request.query.name
    response.send("Hello, "+x);
    

});
app.listen(3000, function(){
	console.log("Listen 3000");
});
