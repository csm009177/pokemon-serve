const http = require('http');
const server = http.createServer(function(request, response) {
  // console.log(request);
  // console.log(typeof(response));
  let main = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>main</title>
  </head>  
  <body>  
  <a href="http://localhost:1234/choi">choi</a>
  <a href="http://localhost:1234/sung">sung</a>
  <a href="http://localhost:1234/min">min</a>
  </body>  </html>`

  let choi = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>choi</title>
  </head>  <body>  <a href="http://localhost:1234">main</a>  </body>  </html>`
  let sung = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>sung</title>
  </head>  <body>  <a href="http://localhost:1234">main</a>  </body>  </html>`
  let min = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>min</title>
  </head>  <body>  <a href="http://localhost:1234">main</a>  </body>  </html>`

if(request.url==="/"){
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end(main);
}
  if(request.url==="/choi") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(choi);
}
  if(request.url==="/sung") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(sung);
}
  if(request.url==="/min") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(min);
}
  
});


server.listen(1234);