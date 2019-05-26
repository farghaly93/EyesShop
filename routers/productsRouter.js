const express = require('express');
const router = express.Router();
const photo1upload = require("../middlewares/photo1upload");
const Product = require("../models/products");
const User = require("../models/user");
const AdminCheck = require("../middlewares/adminCheck");
const authCheck = require("../middlewares/authCheck");

const url = 'https://eyesshop.herokuapp.com/images/';

router.get('', (req,res,next) => {
    res.send('Hello Farghaly');
});
router.post('/api/admin/products/upload', AdminCheck, photo1upload , (req,res,next) => {
    const post = req.body;
    post.discount = Math.ceil(((post.oldPrice - post.newPrice)/post.oldPrice)*100);
    post.date = Date.now();
    if(req.files) {
    post.imagePath1 =  url + req.files[0].filename;
    if(req.files[1]) {
    post.imagePath2 =  url + req.files[1].filename;
    }
    if(req.files[2]) {
    post.imagePath3 =  url + req.files[2].filename;
    }
}
    const product = new Product(post);
    product.save().then(item=>{
        res.status(200).json({
            message: "Uploaded successfully",
            item
        });
    }).catch(err => {
        res.json({mess: "Upload failed please try again.."});
    });
});

router.get('/api/admin/products/getAll/:skip/:limit', AdminCheck, async(req, res, next) => {
    const skip = +req.params.skip;
    const limit = +req.params.limit;
    try {
    const gather =  Product.find().skip(skip).limit(limit);
    const num =  Product.count();
    [items, count] = await Promise.all([gather, num]);
    res.status(200).json({items, count});
    }catch(err) {
        res.status(201).json({mess: "error getting items from database", err});
    };
});

router.delete('/api/admin/products/delete/:id',AdminCheck, (req, res, next) => {
    const del = req.params.id;
    Product.deleteOne({_id: del}).then(res => {
        if(res.n > 0) {
            res.status(200).json({del: true});
        }else {
            res.status(400).json({del: false});
        }
    }).catch(err => {
        res.status(201).json({mess: 'can\'t be deleted'});
    })
});

router.get('/api/admin/products/getOne/:id', AdminCheck, async(req, res, next) => {
    try {
        const item = await Product.findOne({_id: req.params.id});
        res.status(200).json({item});
    } catch(err) {
        res.status(401).json({mess: 'failed to get this one...'});
    }
});
router.put('/api/admin/products/edit', AdminCheck, photo1upload ,async(req, res, next) => {
    /*let post;
    if(req.files) {
    post = req.body;
    post.discount = Math.ceil(((post.oldPrice - post.newPrice)/post.oldPrice)*100); 
    if(!post.photo1 && !post.photo2 && !post.photo3 ) {
        post.imagePath1 = url + req.files[0].filename;
        post.imagePath2 =  url + req.files[1].filename;
        post.imagePath3 =  url + req.files[2].filename;
    }
    if(post.photo1 && !post.photo2 && !post.photo3 ) {
        post.imagePath2 =  url + req.files[1].filename;
        post.imagePath3 =  url + req.files[2].filename;
    }
    if(!post.photo1 && post.photo2 && !post.photo3 ) {
        post.imagePath1 =  url + req.files[0].filename;
        post.imagePath3 =  url + req.files[2].filename;
    }
    if(!post.photo1 && !post.photo2 && post.photo3 ) {
        post.imagePath1 =  url + req.files[0].filename;
        post.imagePath2 =  url + req.files[1].filename;
    }
    if(post.photo3 && post.photo2) {
        post.imagePath1 = url + req.files[0].filename;
    }
    if(post.photo1 && post.photo3) {
        post.imagePath2 =  url + req.files[0].filename;
    }
    if(post.photo1 && post.photo2) {
        post.imagePath3 =  url + req.files[0].filename;
    }
  }
  console.log(post,  req.files[0].filename); */

    const id = req.body.id;
    console.log('hello', id, req.body);
    const update = await Product.updateOne({_id: id}, post);
    if(update) {req
    res.json({mess: 'Updated successfully'});
    }
});
router.get('/api/admin/products/search/:q', async(req, res, next) => {
    try {
        console.log(req.params.q);
        const items = await Product.find(
        { $text: { $search: req.params.q } },
        { score: {$meta: 'textScore'} }
           ).sort({ score:{$meta: 'textScore'} }).limit(5);
        res.status(200).json({items});
    } catch(err) {
        res.json({mess: 'Edit failed may you try again...'});
    }
});

module.exports = router;