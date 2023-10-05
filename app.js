const http = require('http');
const server = http.createServer(function(request, response) {
  // console.log(request);
  // console.log(typeof(response));
  response.writeHead(200, {"Content-Type" : "text/html"});
  // 프로토콜 일반 타입에서는 :을 쓴다

  let doc = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    안녕
  </body>
  </html>`
  response.end(doc);
});

server.listen(1234);