const http = require("http")
const url = require("url")
const fs = require("fs")

//page for not founding
const pageNotFound = fs.readFileSync(`${__dirname}/tex.txt`, "utf-8")

//read file of data
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const dataProduct = JSON.parse(data)

//call templates
const cardTemplate = fs.readFileSync(
	`${__dirname}/templates/temp-overview.html`,
	"utf-8"
)
const productTemplate = fs.readFileSync(
	`${__dirname}/templates/product.html`,
	"utf-8"
)
const overviewTemplate = fs.readFileSync(
	`${__dirname}/templates/overview.html`,
	"utf-8"
)

//function for replaceTemplate
/**
 * 
 * @param {*} product ---> use to load data
 * @param {*} templates ---> replace templates	with data
 * {%IMAGE%}
{%PRODUCTNAME%}
{%FROM%
{%NUTRIENTS%}
{%QUANTITY%}
{%PRICE%}
{%DESCRIPTION%}
 "productName": "Sweet Corncobs",
    "image": "🌽",
    "from": "Germany",
    "nutrients": "Vitamin C, Magnesium",
    "quantity": "2 🌽",
    "price": "2.00",
    "organic": false,
    "description": 
 * 
 */
const replaceTemplate = (product, templates) => {
	let output = templates.replace(/{%PRODUCTNAME%}/g, product.productName)
	output = output.replace(/{%IMAGE%}/g, product.image)
	output = output.replace(/{%PRICE%}/g, product.price)
	output = output.replace(/{%id%}/g, product.id)
	output = output.replace(/{%QUANTITY%}/g, product.quantity)
	output = output.replace(/{%DESCRIPTION%}/g, product.description)
	if (!product.organic)
		return (output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic"))
	return output
}

//create server
const server = http.createServer((req, res) => {
	const urlPath = req.url
	const { query, pathname } = url.parse(urlPath)

	//server routes
	if (pathname === "/" || pathname === "/overview") {
		res.writeHead(200, {
			"content-type": "text/html",
		})
		const resultTemp = dataProduct
			.map((elm) => replaceTemplate(elm, cardTemplate))
			.join()
		const mainTemplate = overviewTemplate.replace("{%CARDS%}", resultTemp)
		res.end(mainTemplate)
	} else if (pathname === "/product") {
		res.end(resultTemp)
	} else if (pathname === "/api") {
		res.writeHead(200, { "Content-Type": "text/html" })

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
