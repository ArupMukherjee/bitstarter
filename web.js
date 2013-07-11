svar express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    
    var stringVal = ' ';
    fs.readFile('index.html', function(err,data) {
        var buffer = new buffer(data);
        stringVal = buffer.toString("utf-8");   
    });

    response.send(stringVal);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});