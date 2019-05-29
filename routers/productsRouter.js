const express = require('express');
const router = express.Router();
const photo1upload = require("../middlewares/photo1upload");
const Product = require("../models/products");
const User = require("../models/user");
const AdminCheck = require("../middlewares/adminCheck");
const authCheck = require("../middlewares/authCheck");
const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4',
    region: 'us-west-2',
  });
  
  const s3 = new aws.S3();

const url = 'https://eyesshop.herokuapp.com/images/';

router.get('', (req,res,next) => {
    res.send('Hello Farghaly');
});
router.post('/api/admin/products/upload', AdminCheck, photo1upload , (req,res,next) => {
    const params = {
        Bucket: 'eyesshop',
        Key: `${Date.now().toString()}-hahahaha.jpg`,
        ContentType: 'jpg',
      };
    
      s3.getSignedUrl('putObject', params, (err, url) => {
        res.status(200).json({
          method: 'put',
        });
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
router.put('/api/admin/products/edit', AdminCheck,async(req, res, next) => {
    const params = {
        Bucket: 'eyesshop',
        Key: `${Date.now().toString()}-hahahaha.jpg`,
        ContentType: 'jpg',
      };
    
      s3.getSignedUrl('putObject', params, (err, url) => {
        res.status(200).json({
          method: 'put',
        });
      });
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