const mongoose = require('mongoose');

// Defining the Schema for the Cart
const CartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        required: true,
    },

    // We will give reference to the items model ==> It like a foreign key
    cartItem: {
        type: String,
        required: true,
    },

    itemName: {
        type: String,
        required: true,
    },
    itemDate: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: String,
        required: true,
    },
    itemType: {
        type: String,
        required: true,
    },
    itemCategory: {
        type: String,
        required: true,
    },
    itemImages: {
        type: String,
        required: true,
    },
    itemCode: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: () => new Date().toISOString(),
        required: true,
    },

    itemOrdered: {
        type: Boolean,
        default: false
    }

});

// Exporting the model: 
// model takes a name and the schema

const Cart = mongoose.model("cart", CartSchema);
// Cart.createIndexes() // used to create indexes and don't save duplicates records
// To avoid creating 2 indexes, we will remove this and we will verfiy the duplicate Cart in the code itself (auth.js)
module.exports = Cart;