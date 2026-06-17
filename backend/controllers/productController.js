import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//  nadji sve proizvode
// route GET /api/products
// access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products); //vrati kao json
});

//   nadji proizvode po id-ju
// @route GET /api/products/:id uzima odavde id po kom trazi
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Proizvod nije pronađen");
    }
});

// @desc  Create a new product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Test naziv',
        price: 0,
        user: req.user._id, //dolazi iz midlvera
        image: '/images/sample.jpg',
        category: 'Test kategorija',
        countInStock: 0,
        numReviews: 0,
        description: 'Test opis',
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc  Update a product
// @route PUT /api/products/:id
// @access Private/Admin

// iz req.body uzima nove vrednosti, nađe poslasticu po ID-u i ažurira polja. 
// Koristi || operator — ako novo polje nije poslato, ostaje stara vrednost.
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, category, countInStock } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.image = image || product.image;
        product.category = category || product.category;
        product.countInStock = countInStock !== undefined ? countInStock : product.countInStock;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error("Proizvod nije pronađen");
    }
});

// @desc  Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin

//nadje proizvod po Id-ju i obrise ga 
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await Product.deleteOne({ _id: product._id }); //ugradjeno u moongusu
        res.status(200).json({ message: "Poslastica obrisana" });
    } else {
        res.status(404);
        throw new Error("Proizvod nije pronađen");
    }
});

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };