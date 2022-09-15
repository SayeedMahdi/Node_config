/** @format */

const Products = require("../models/product");

exports.getAddProduct = (req, res, next) => {
	res.render("admin/edit-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
		editing: false,
	});
};

exports.postAddProduct = async (req, res, next) => {
	const title = req.body.title;
	const price = parseInt(req.body.price);
	const imageUrl = req.body.imageUrl;
	const description = req.body.description;
	console.log(title, price, description, imageUrl);
	const re = await db.execute(`
	  INSERT INTO product (title, price, description,imageUrl) VALUES ('${title}', ${price}, '${description}','${imageUrl}');
  `);

	res.redirect("/");
};

exports.getEditProduct = async (req, res, next) => {
	const editMode = req.query.edit;
	if (!editMode) {
		return res.redirect("/");
	}
	const prodId = req.params.productId;
	Products.findById(prodId)
		.then(([rows, fieldData]) => {
			if (!rows) {
				return res.redirect("/");
			}
			res.render("admin/edit-product", {
				pageTitle: "Edit Product",
				path: "/admin/edit-product",
				editing: editMode,
				product: rows,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postEditProduct = (req, res, next) => {
	const prodId = req.body.productId;
	const updatedTitle = req.body.title;
	const updatedPrice = req.body.price;
	const updatedImageUrl = req.body.imageUrl;
	const updatedDesc = req.body.description;
	const updatedProduct = new Product(
		prodId,
		updatedTitle,
		updatedImageUrl,
		updatedDesc,
		updatedPrice
	);
	updatedProduct.save();
	res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
	Products.fetchAll()
		.then(([rows, fieldData]) => {
			res.render("admin/products", {
				prods: rows,
				pageTitle: "Admin Products",
				path: "/admin/products",
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postDeleteProduct = (req, res, next) => {
	const prodId = req.body.productId;
	// Product.deleteById(prodId);
	res.redirect("/admin/products");
};
