const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: Number,
});

userSchema.indexes({
  username: 'text'
})

userSchema.virtual('cart', {
  ref: 'Cart',
  localField: '_id',
  foreignField: 'userid'
});


userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
