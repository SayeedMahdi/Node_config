const http = require("http");
const server=http.createServer();
server.on("request", (req, res) => {
    res.end("some data");
});
server.listen(500,console.log("serveris list"));