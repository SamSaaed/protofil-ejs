var http = require('http');
     var fs = require('fs');
     
 //creating server
 http.createServer(function (req, res) {
   fs.readFile('index.ejs', function (err, html) {
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write(html);
     res.end();
    
   });
  
 }).listen(8080);