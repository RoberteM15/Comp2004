const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product