const http = require('http');
const server = http.createServer(function(request, response) {
  // console.log(request);
  // console.log(typeof(response));
  let main = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>main</title>
  </head>  
  <body>  
  <a href="http://localhost:1234/sub">sub</a>
  </body>  </html>`

  let sub = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>main</title>
  </head>  <body>  <a href="http://localhost:1234">main</a>  </body>  </html>`

if(request.url==="/"){
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end(main);
}
  if(request.url==="/sub") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(sub);
  }
});

server.listen(1234);