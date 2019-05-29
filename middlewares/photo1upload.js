var AWS = require('aws-sdk');
var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users

var myBucket = 'eyesshop-bucket';

var myKey = 'textFile';


 params = {Bucket: myBucket, Key: myKey, Body: 'Valueeee or some data' };

     s3.putObject(params, function(err, data) {

         if (err) {

             console.log(err)

         } else {

             console.log("Successfully uploaded data to myBucket/myKey");

         }

      });