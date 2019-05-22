const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: String,
    comment: String,
    rating: Number,
    productid: String,
    date: Date
});
reviewSchema.statics.rating = function(id){
    return this.aggregate([
       {$match: {productid: id}},
       {$unwind: '$rating'},
       {$group:{_id: '$rating' , count: {$sum:1}}},
       {$sort:{count:1}}
     ]);
 }
module.exports = mongoose.model('Review', reviewSchema);