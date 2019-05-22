const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userid: String,
    proid: String,
    brand: String,
    image: String,
    price: Number,
    date: Date,
    quantity: Number
});
cartSchema.pre('save', function(next) {
    this.date = Date.now();
    next();
});


cartSchema.statics.cartUser = function(){
    return this.aggregate([
       {$unwind: '$user'},
       {$group:{_id:'$user'}},
     ]);
 }

cartSchema.statics.topLiked = function() {
    return this.aggregate([
        {$unwind: '$proid'},
        {$group: {_id: '$proid' , count: {$sum:1} }},
        {$sort: {count:-1}},
    ]);
}

module.exports = mongoose.model('Cart', cartSchema);