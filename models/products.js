const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    brand: String,
    color: String,
    type: String,
    gender: String,
    design: String,
    imagePath1: Object,
    imagePath2: Object,
    imagePath3: Object,
    oldPrice: Number,
    newPrice: Number,
    discount: Number,
    size: String,
    description: String,
    quantity: {type: Number, default: 1},
    date: Date,
    rate: {type: Number, default: 0}
});

productSchema.indexes({
    brand: 'text',
    color: 'text',
    type: 'text',
    design: 'text',
    gender: 'text'
});

productSchema.pre('save', function(next) {
    this.discount = Math.ceil(((this.oldPrice - this.newPrice)/this.oldPrice)*100);
    next();
});
productSchema.pre('update', function(next) {
    this.discount = Math.ceil(((this.oldPrice - this.newPrice)/this.oldPrice)*100);
    next();
});


productSchema.statics.categs = function(cat){
    return this.aggregate([
       {$unwind: '$'+cat},
       {$group:{_id:'$'+cat , count: {$sum:1}}},
       {$sort:{count:-1}}
     ]);
 }



module.exports = mongoose.model('Product', productSchema);