const multer = require('multer');
var s3 = require( 'multer-storage-s3' );

mimeTypes = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = s3({
  destination: (req, file, cb) => {
    let err = new Error('Not right file type');
    const isValid = mimeTypes[file.mimetype];
    if(isValid) {
      err = null;
    }
    cb(err, 'images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = mimeTypes[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
  bucket: 'eyesshop-bucket',
    region: 'us-east-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports =  multer({storage: storage}).array('images');
