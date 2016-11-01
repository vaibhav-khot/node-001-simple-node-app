var http = require('http');

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
// console.log("++++++++++++body");
//     console.log(body);
//     console.log("++++++++++++url");
//     console.log(request.url);
//     console.log("++++++++++++header");
//     console.log(request.headers);
//     console.log("++++++++++++method");
//     console.log(request.method);
//     console.log("++++++++++++");
var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: body
    };

    // response.write('<html>');
    // response.write('<body>');
    // response.write('<h1>Hello, JSON!</h1>');
    // response.write('<h1>body</h1>');
    // response.write('<h1>'+body+'</h1>');
    // response.write('<h1>request.headers</h1>');
    // response.write('<h1>'+request.headers+'</h1>');
    // response.write('<h1>request.method</h1>');
    // response.write('<h1>'+request.method+'</h1>');
    // response.write('<h1>request.url</h1>');
    // response.write('<h1>'+request.url+'</h1>');
    // response.write('<h1>REQUEST</h1>');
    // response.write('<h1>'+request+'</h1>');
    // response.write('<h1>RESPONSE----------</h1>');
    // response.write('<h1>'+JSON.stringify(responseBody)+'</h1>');
    // response.write('<h1>RESPONSe only</h1>');
    // response.write('<h1>'+JSON.stringify(response)+'</h1>');
    //
    // response.write('</body>');
    // response.write('</html>');
    response.write(JSON.stringify(responseBody));
    response.end();
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });
}).listen(8080); // Activates this server, listening on port 8080.
console.log("listening on port 8080");
