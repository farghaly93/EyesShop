const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

exports.add = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const newUser = new User({
      username: req.body.username,
      password: hash,
      role: 0
    });
    newUser.save().then(user => {
      res.status(201).json({
        message: 'new user successfully added',
        data: {username: req.body.username, password: req.body.password}
      });
    }).catch(err => {
      res.status(500).json({
        error: err,
        mess: 'user failed to be added'
      });
    });
  });
};
exports.login = (req, res, next) => {
  let userdata;
  User.findOne({username: req.body.username}).then(user => {
    if (!user) {
      return res.status(401).json({mess: 'No such username..'});
    }
    userdata = user;
    return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
      if (!result) {
        return res.status(401).json({mess: 'Wrong password..'});
      }
      if(userdata.role === 1) {
        const token = jwt.sign(
          {username: userdata.username, userid: userdata._id},
          'Admin Mohammad Anwar Saadawy',
          { expiresIn: '1h' }
          );
          if(req.body.expireTimems === 0) {
        res.status(201).json({
          message: 'you are logged in successfully',
          token,
          userId: userdata._id,
          expireTime: 6000,
          role: userdata.role
        });
      }else {
        res.status(201).json({
          message: 'you are logged in successfully',
          token,
          userId: userdata._id,
          expireTime: req.body.expireTimems,
          role: userdata.role
        });
        }
      }else {
        const token = jwt.sign(
          {username: userdata.username, userid: userdata._id},
          'mohammad farghaly ali',
          { expiresIn: '1h' }
          );
          if(req.body.expireTimems === 0) {
        res.status(201).json({
          message: 'you are logged in successfully',
          token,
          userId: userdata._id,
          expireTime: 6000,
          role: userdata.role
        });
      }else {
        res.status(201).json({
          message: 'you are logged in successfully',
          token,
          userId: userdata._id,
          expireTime: req.body.expireTimems,
          role: userdata.role
        });
        }
      }
    })
    .catch(err => {
      console.log(err);
      res.status(401).json({
        error: err,
        mess: 'some thing wrong happened cant login'
      });
    });
  };
exports.check = async(req, res, next) => {
  try {
  const name = req.params.name;
  const findname = await User.find({username: name});
  if(findname) {
    res.status(200).json({found: true});
   }
  } catch(err) {
    res.status(201).json({err});
  }
}