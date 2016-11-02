
/*   ob1 ===Content Type text/plain add Pre tag And inside that data 
     ob2 ===Content Type text/html  treate data as HTML
  */

var http = require("http");
http.createServer(function (req,res) {
res.writeHead(200,{"Content-Type":"text/html"});
res.end("<h1>hello</h1>");
}).listen(8080);
console.log("server running on 8080");
