const http = require("http"); 

const server = http.createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>This page was served with Node.js!</h1></body></html>"
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
