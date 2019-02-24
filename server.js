var express = require('express');
var app = express();

//app.use(express.static('build'));
app.use(express.static(__dirname + '/build'));

app.get('/*', function(req, res){
  res.sendFile('/build/index.html' ,{root:__dirname});
});

app.listen(3000, function () {
  console.log('MD listening on port 3000!');
});