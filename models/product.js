const mongoose = require('mongoose');

// Create Schema for "product"
// - Add fields (Type, constraint, validation)
// - Options
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description : {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true,
        validate(value) {
            if(value <= 0) {
                throw new Error('No negative price!');
            }
        }
    },
    inStock: {
        type: Boolean,
        default: true
    },
    tags: [String]
}, {
    collection: 'Products',
    timestamps: true
})

// Create model "product" base on "schema"
const Product = mongoose.model('Product', productSchema);
module.exports = Product;