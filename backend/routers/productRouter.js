import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";
import { isAdmin, isAuth, isSellerOrAdmin } from "../utils.js";

const productRouter = express.Router();

//Récupération des products dans l'ordre d'arrivé
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || "";
    const category = req.query.category || "";
    const seller = req.query.seller || "";
    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const sellerFilter = seller ? { seller } : {};
    const categoryFilter = category ? { category } : {};
    const products = await Product.find({
      ...sellerFilter,
      ...nameFilter,
      ...categoryFilter,
    });
    res.send(products);
  })
);

//Récupérations des catégories
productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);

// Récupération des 3 derniers produits BY STEVE
productRouter.get(
  "/lastproducts",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ _id: -1 }).limit(5);
    res.send(products);
  })
);

//Insertion de la base de données
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({})
    const createdProducts = await Product.insertMany(data.products);
    res.send({ products: createdProducts }); // ou createdProducts
  })
);

//Récupération d'un product en particulier
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

// Créer un PRODUCT
productRouter.post(
  "/",
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: "sample name" + Date.now(), // for an unique name
      seller: req.user._id,
      image: "/images/p1.jpg",
      price: 0,
      category: "sample brand",
      brand: "sample brand",
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      description: "sample description",
    });
    const createdProduct = await product.save();
    res.send({ message: "Product Created", product: createdProduct });
  })
);

// MODIFIER UN PRODUCT
productRouter.put(
  "/:id",
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      (product.name = req.body.name),
        (product.price = req.body.price),
        (product.image = req.body.image),
        (product.category = req.body.category),
        (product.brand = req.body.brand),
        (product.countInStock = req.body.countInStock),
        (product.description = req.body.description);
      const updatedProduct = await product.save();
      res.send({ message: "Product Updated", product: updatedProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

// SUPPRIMER UN PRODUCT
productRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: "Product Deleted", product: deleteProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
