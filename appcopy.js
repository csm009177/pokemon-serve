const http = require('http');
const server = http.createServer(function(request, response) {
  // console.log(request);
  // console.log(typeof(response));
  let main = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>main</title>
  </head>  
  <body>  
  <a href="http://localhost:1234/CPU">CPU</a>
  <a href="http://localhost:1234/MotherBoard">MotherBoard</a>
  <a href="http://localhost:1234/RAM">RAM</a>
  
  </body>  </html>`

  let CPU = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>CPU</title>
  </head>  <body>  <a href="http://localhost:1234">main</a>  </body>  </html>`
  let MotherBoard = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>MotherBoard</title>
  </head>  <body>  <a href="http://localhost:1234">main</a>  </body>  </html>`
  let RAM = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>RAM</title>
  </head>  <body>  <a href="http://localhost:1234">main</a>  </body>  </html>`

if(request.url==="/"){
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end(main);
}
  if(request.url==="/CPU") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(CPU);
}
  if(request.url==="/MotherBoard") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(MotherBoard);
}
  if(request.url==="/RAM") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(RAM);
}
});


server.listen(1234);