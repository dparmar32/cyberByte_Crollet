const {Schema} = require('mongoose');

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