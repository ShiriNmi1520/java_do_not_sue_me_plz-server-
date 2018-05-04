const express = require('express');
const path = require('path');
const app = express();

app.listen(8124, function(){
    console.log("Sample EXPRESS is running on port 8124!")
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
