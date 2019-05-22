const multer = require('multer');

const BUCKET_NAME = 'eyesshop-front';
const IAM_USER_KEY = 'AKIAIHQIW67EGZY2BYCA';
const IAM_USER_SECRET = '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';

mimeTypes = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET,
      Bucket: BUCKET_NAME
    });
    s3bucket.createBucket(function () {
        var params = {
          Bucket: BUCKET_NAME,
          Key: file.name,
          Body: file.data
        };
        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log('error in callback');
            console.log(err);
          }
          console.log('success');
          console.log(data);
        });
    });
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
  }
});

module.exports =  multer({storage: storage}).array('images');
