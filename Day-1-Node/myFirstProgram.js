// var http=require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});

//     res.end('Hello world...');
// }).listen(8080);

var http=require('http');
var url=require('url');
var dt = new require('./myModule.js'); 

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The current date and time is :"+dt.mydateTime());
    // res.write(req.url);
    var sample = url.parse(req.url,true).query;
    output = sample.year + " " + sample.name;
    res.end(output);
}).listen(8080);
