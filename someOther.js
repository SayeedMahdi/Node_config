
const http = require("http");
const server = http.createServer((req, res) => {
    console.log("some we do");
    res.writeHead(200, { "content-type": "text/plan" });
    res.write("<h1>html send header</h1>");
    res.end()
});


server.listen(500,console.log("serveris listen "));