const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
    tutor : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    level : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    message : {
        type : String,
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;