const mongoose = require('mongoose');

// Defining the Schema for the Orders
const OrdersSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    },
    orderID: {
        type: String,
        required: "true",
        unique: true,
    },
    orderFrom: {
        type: String,
        required: "true",
    },
    orderDate: {
        type: Date,
        default: () => new Date().toISOString(),
        required: true,
    },
    orderStatus: {
        type: String,
        required: "true",
        default: "Approval Remaining"
    },
    orderAddress: {
        type: String,
        required: "true",
    },
    orderPrice: {
        type: Number,
        required: "true",
    },
    orderApprovedBy: {
        type: String,
        required: "true",
        default: "None",
    },
    orderDisapprovedBy: {
        type: String,
        required: "true",
        default: "None",
    },
    orderApproveDate: {
        type: Date,
        default: "",
    },
    orderArrivalTime: {
        type: Number,
        required: true,
        default: 0,
    },
    orderApproverName: {
        type: String,
        default: "",
    },
    orderDisapproverName: {
        type: String,
        default: "",
    },
    orderImage: {
        type: String,
        required: true,
    },
    orderItemName: {
        type: String,
        required: true,
    },
    orderTransactionID: {
        type: String,
        required: true,
    }

});

// Exporting the model: 
// model takes a name and the schema
const Orders = mongoose.model("orders", OrdersSchema);
// Orders.createIndexes() // used to create indexes and don't save duplicates records
// To avoid creating 2 indexes, we will remove this and we will verfiy the duplicate Orders in the code itself (auth.js)
module.exports = Orders;