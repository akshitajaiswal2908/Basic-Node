// const { products } = require("../routes/admin");
// const products =[];

const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{pageTitle: 'Add Product', path:'/admin/add-product',activeAddProduct:true,formsCSS:true,productCSS:true});
};


exports.postAddProduct=(req,res,next)=>{
    // products.push({ title: req.body.title} );
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/')};    

exports.getProducts = (req,res,next)=>{
        // console.log(adminData.products);
        // res.sendFile(path.join(rootDir,'views','shop.html'));
        const products = Product.fetchAll();
        res.render('shop',{prods:products, pageTitle :"Shop",path : "/",hasProducts: products.length > 0,activeShop:true,productCSS:true});
};