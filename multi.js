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
  <a href="http://localhost:1234/M_B">M_B</a>
  <a href="http://localhost:1234/RAM">RAM</a>
  <a href="http://localhost:1234/SSD">SSD</a>
  <a href="http://localhost:1234/HDD">HDD</a>
  <a href="http://localhost:1234/P_W">P_W</a>
  
  </body>  </html>`

  let CPU = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>CPU</title>
  </head>  <body>  
  <a href="http://localhost:1234">main</a>  
  </body>  </html>`

  let M_B = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>M_B</title>
  </head>  <body>  
  <a href="http://localhost:1234">
  main</a>  </body>  </html>`

  let RAM = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>RAM</title>
  </head>  <body>  
  <a href="http://localhost:1234">main</a>  
  </body>  </html>`

  let SSD = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>SSD</title>
  </head>  <body>  
  <a href="http://localhost:1234">main</a>  
  </body>  </html>`

  let HDD = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>HDD</title>
  </head>  <body>  
  <a href="http://localhost:1234">main</a>  
  </body>  </html>`

  let P_W = `<!DOCTYPE html>
  <html lang="en">
  <head> <title>P_W</title>
  </head>  <body>  
  <a href="http://localhost:1234">main</a>  
  </body>  </html>`


if(request.url==="/"){
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end(main);
}
  if(request.url==="/CPU") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(CPU);
}
  if(request.url==="/M_B") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(M_B);
}
  if(request.url==="/RAM") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(RAM);
}
  if(request.url==="/SSD") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(SSD);
}
  if(request.url==="/HDD") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(HDD);
}
  if(request.url==="/P_W") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(P_W);
}
});


server.listen(1234);