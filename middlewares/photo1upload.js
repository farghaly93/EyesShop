
const AWS = require('aws-sdk');
const Busboy = require('busboy');

const BUCKET_NAME = 'eyesshop-front';
const IAM_USER_KEY = 'AKIAIHQIW67EGZY2BYCA';
const IAM_USER_SECRET = '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';
const file = req.files.element2;
console.log(file);
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
