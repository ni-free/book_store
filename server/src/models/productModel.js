import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
   
}, {timestamps: true})

const ProductSchema = new mongoose.Schema({
     
    name: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    publication: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [ReviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    }
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;