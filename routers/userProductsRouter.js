const express = require('express');
const router = express.Router();
const Product = require("../models/products");
const Review = require("../models/reviews");
const authCheck = require("../middlewares/authCheck");
const userGet = require("../middlewares/userGet");
const adminCheck = require("../middlewares/adminCheck");
const User = require('../models/user');
const Cart = require("../models/cart");

router.get('/api/ui/products/:cat', async(req,res,next) => {
    try {
    const cats = await Product.categs(req.params.cat);
    res.status(200).json({cats});
    } catch(err) {
        res.status(401).json({mess: 'error getting categories.. '});
    }
});
router.get('/api/ui/products/getAll/:skip/:limit/:order', userGet, async(req, res, next) => {
    const skip = +req.params.skip;
    const limit = +req.params.limit;
    const order = req.params.order;
    try {
        let cart;
        if(req.user) {
        cart = await Cart.find({userid: req.user.userId});
        console.log(cart);
       }
        const gather =  Product.find().skip(skip).limit(limit).sort({[order]: -1});
        const num =  Product.count();
        [items, count] = await Promise.all([gather, num]);
        res.status(200).json({items, count, cart});
    }catch(err) {
        res.status(201).json({mess: "cant get items please reload..", err});
    };
});

router.post('/api/ui/products/filter', async(req, res, next) => {
    try {
    const filteredItems = await Product.find(req.body);
    const count =  await Product.find().count();
    res.status(200).json({filteredItems, count});
    }
    catch(err) {
        res.status(401).json({mess:'a7a', err});
    }
});
router.get('/api/ui/products/getProduct/:id', async(req, res, next) => {
    try {
    const details = await Product.findById(req.params.id);
    res.status(200).json({details});
    }
    catch(err) {
        res.status(401).json({mess:'a7a', err});
    }
});
router.get('/api/ui/reviews/get/:id/:skip/:limit', async(req, res, next) => {
    try {
        const proid = req.params.id;
        const skip = +req.params.skip;
        const limit = +req.params.limit;
    const revs = Review.find({productid: proid}).skip(skip).limit(limit);
    const c = Review.find({productid: proid}).count();
    [reviews, count] = await Promise.all([revs, c]);
    res.status(200).json({reviews, count});
    }
    catch(err) {
        res.status(401).json({mess:'wrong: error in gathering reviews..', err});
    }
});
router.post('/api/ui/reviews/add', async(req, res, next) => {
    try {
    const details = await new Review(req.body).save();
    res.status(200).json({details, count: 40});
    }
    catch(err) {
        res.status(401).json({mess:'wrong: error adding new review..', err});
    }
});
router.get('/api/ui/products/rating/:id', async(req, res, next) => {
    try {
        let averageRate = 0;
        let total = 0;
        const a = await Review.rating(req.params.id);
        for(rating of a) {total += rating.count}
        for(rating of a) {
            averageRate += rating._id*rating.count/total;
        }
        const rate = Math.ceil(averageRate);
        const b = await Product.update({_id:req.params.id} ,{rate});
        [ratings, push] = await Promise.all([a, b]);
        res.status(200).json({ratings,averageRate});
    }
    catch(err) {
        res.status(401).json({mess:'3a7at', err});
    }
});
router.post('/api/ui/cart/add', authCheck, async(req, res, next) => {
    try {
        const userid = req.user.userId;
        const body = req.body;
        const post = {userid,proid: body._id, brand: body.brand,price:body.newPrice,image:body.imagePath1,quantity:1};
        const cartcount = await Cart.find({userid, proid: body._id}).count(); 
        let n;
        if(cartcount > 0) {
            n = await Cart.deleteOne({proid: post.proid});
        }else {
            n = await new Cart(post).save();
        }
        const a =  Cart.find({userid});
        const b =  Cart.find({userid}).count();
        [updatedCart, count] = await Promise.all([a, b]);
        res.status(200).json({updatedCart, count, cartcount});
    } catch(error) {
        res.json({mess: "Wrong: cant add to cart..!"});
    }
});
router.get('/api/ui/cart/get/:id',userGet , async(req, res, next) => {
    try {
        let userid;
        if((req.params.id ).length > 15) {userid = req.params.id}else{ userid = req.user.userId;}

        const a =  Cart.find({userid});
        const b =  Cart.find({userid}).count();
        [updatedCart, count] = await Promise.all([a, b]);
        for(oneCart of updatedCart) {
        const prod = await Product.findById(oneCart.proid);
        if(prod) {
        const img = prod.imagePath1;
        oneCart.image = img;
        }
    }
        res.status(200).json({updatedCart, count});
    } catch(err) {
        res.json({mess: 'failed to get cart...'});
    }
});
router.patch('/api/ui/cart/update', authCheck, async(req, res, next) => {
    try {
        const body = req.body;
        const userid = req.user.userId;
        const a =  Cart.updateOne({proid: body.id}, {quantity:body.qnt});
        const b =  Cart.find({userid});
        const c =  Cart.find({userid}).count();
        [aw, updatedCart, count] = await Promise.all([a, b, c]);
        res.status(200).json({updatedCart, count});
    } catch(err) {
        res.json({mess: 'cant update cart'});
    }
});
router.get('/api/ui/cart/top', async(req, res, next) => {
    try {
        let topLiked = [];
        const topLikedIds = await Cart.topLiked();
        for(let i=0; i<2; i++) {
            const item = await Product.find({_id: topLikedIds[i]._id})
            topLiked.push(item[0]);
        }
        res.status(200).json({topLiked});
    } catch(err) {
        res.json({err});
    }
});

module.exports = router;
