const http = require("http")
const url = require("url")
const fs = require("fs")

const pageNotFound = fs.readFileSync(`${__dirname}/tex.txt`, "utf-8")
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const dataProduct = JSON.parse(data)
const server = http.createServer((req, res) => {
	const path = req.url
	console.log(path)

	if (path === "/" || path === "/overview") {
		res.writeHead(200, {
			"content-type": "text/Html",
		})
		res.end("<h1>Hello for H1 </h1>")
	} else if (path === "/product") {
		res.end("Hello from server")
	} else if (path === "/api") {
		res.writeHead(200, { "Content-Type": "application/json" })
		res.end(dataProduct)
	} else {
		res.writeHead(404, {
			"content-type": "text/Html",
		})
		res.end(pageNotFound)
	}
})

server.listen(3000, (err) => {
	console.log("server listening on 3000 ")
	if (err) {
		console.log(err)
	}
})
