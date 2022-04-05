const db = require('../config/connection');
const { User } = require('../models');
// uncommented out profileSeeds
const profileSeeds = require('./profileSeeds.json');
const coinSeeds = require('./coinSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    // bulk create or iterate over profiles and then bulk create but remember to include the hooks to salt the passwords

    // Another option would be to look at adding the hooks into the Profile.json file before we seed the DB
    await User.create(profileSeeds);
    //create with coin with model or look into populate a sub document that belongs to user
    await User.create(coinSeeds);


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
