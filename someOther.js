const { readFileSync } = require("fs");
const page = readFileSync("./navbar-app/index.html", "utf-8");
const pageStyle = readFileSync("./navbar-app/styles.css", "utf-8");

const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(page);
        res.end();
    }
    else if (url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(pageStyle);
        res.end();
    }
});


server.listen(500,console.log("serveris listen "));