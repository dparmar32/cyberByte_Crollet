const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedCoins` array in User.js
const coinSchema = new Schema({
  id: [
    {
      type: String,
    },
  ],
  rank: {
    type: Number,
    required: true,
  },
  // saved coin id from CoinCap ??
  // check again for relationship with API and/or database
  coinId: {
    type: Number,
    required: true,
  },
  symbol: {
    type: String,
  },
  priceUSD: {
    type: String,
  },
  explorer: {
    type: String,
    required: true,
  },
});

module.exports = coinSchema;
