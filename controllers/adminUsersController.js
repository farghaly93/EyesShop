const User = require('../models/user');

exports.getAll =  async(req, res, next) => {
    const skip = +req.params.skip;
    const limit = +req.params.limit;
    try {
    const gather =  User.find().skip(skip).limit(limit).sort({role: -1});
    const num =  User.count();
    [users, count] = await Promise.all([gather, num]);
    res.status(200).json({users, count});
    }catch(err) {
        res.status(201).json({mess: "error getting users from database", err});
    };
};

exports.del = (req, res, next) => {
    const del = req.params.id;
    User.deleteOne({_id: del}).then(res => {
        if(res.n > 0) {
            res.status(200).json({del: true});
        }else {
            res.status(400).json({del: false});
        }
    }).catch(err => {
        res.status(201).json({mess: 'can\'t be deleted'});
    })
};

exports.getOne = async(req, res, next) => {
    try {
        const user = await User.findOne({_id: req.params.id});
        res.status(200).json({user});
    } catch(err) {
        res.status(401).json({mess: 'failed to get this one...'});
    }
};
 exports.search = async(req, res, next) => {
    try {
        const users = await User.find(
        { $text: { $search: req.params.q } },
        { score: {$meta: 'textScore'} }
           ).sort({ score:{$meta: 'textScore'} }).limit(5);
        res.status(200).json({users});
    } catch(err) {
        res.json({mess: 'no thing fount on this name...'});
    }
};
exports.updateRole = async(req, res, next) => {
    try {
        const user = await User.findOne({_id: req.body.id});
        const role = (user.role===0)?1:0;
        const update = await User.update({_id: req.body.id}, {role});
        const users = await User.find();
        res.status(200).json({users});
    } catch(err) {
        res.json({mess: 'error updating this user role'});
    }
};