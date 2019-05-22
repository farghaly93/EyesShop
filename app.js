const express= require('express');
const path = require('path');
const bodyParser= require('body-parser');
const productsRouter = require('./routers/productsRouter');
const userProductsRouter = require('./routers/userProductsRouter');
const usersRouter = require('./routers/users');
const adminUsersRouter = require('./routers/adminUsers');
const mongoose= require('mongoose');
const app= express();
const AWS = require('aws-sdk');
const Busboy = require('busboy');


mongoose.connect(process.env.mongodb)
.then(() => {
  console.log('Connected successfully..');
}
).catch(()=>{
  console.log('Connection failed ... !');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/', express.static(path.join(__dirname, 'angular')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(productsRouter);
app.use(userProductsRouter);
app.use(usersRouter);
app.use(adminUsersRouter);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

module.exports= app;
