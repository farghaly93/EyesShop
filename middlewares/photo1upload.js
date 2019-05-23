const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

aws.config.update({
secretAccessKey: 'qxH5y7kZ3lOXOkD2QKmR8hIId78VOtyPvXK0jTA1',
accessKeyId: 'AKIAIHQIW67EGZY2BYCA',
region: 'us-east-1'
});
mimeTypes = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};
s3 = new aws.S3();
const storage = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'eyesshop-front',
    key: function (req, file, cb) {
        console.log(file);
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = mimeTypes[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
}),
  destination: (req, file, cb) => {
    let err = new Error('Not right file type');
    const isValid = mimeTypes[file.mimetype];
    if(isValid) {
      err = null;
    }
    cb(err, 'images');
  }
});

module.exports =  multer({storage: storage}).array('images');
