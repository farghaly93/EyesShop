var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY });

// Read in the file, convert it to base64, store to S3
fs.readFile('hahahaha.jpg', function (err, data) {
  if (err) { throw err; }

  var base64data = new Buffer(data, 'binary');

  var s3 = new AWS.S3();
  s3.client.putObject({
    Bucket: 'eyesshop-bucket',
    Key: 'hahahaha.jpg',
    Body: base64data,
    ACL: 'public-read'
  },function (resp) {
    console.log(arguments);
    console.log('Successfully uploaded package.');
  });

});
  //bucket: 'eyesshop-bucket',
   // region: 'us-east-2',
    //aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
    //aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY
