const {Schema} = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const coinSchema = new Schema({
    // saved coin id from Coin api
    coinId: {
        type: String,
        required: true,
    },
    rank: {
        type: String,
    },
    symbol: {
        type: String,
    },
    name: {
        type: String,
    },
    priceUsd: {
        type: String,
        required: true,
    },
    changePercent24Hr: {
        type: String,
    },
    explorer: {
        type: String,
    },
});

module.exports = coinSchema;
