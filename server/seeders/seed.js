const db = require('../config/connection');
const { User } = require('../models');
<<<<<<< HEAD
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
=======
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(userSeeds);

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
>>>>>>> 9a0dc8349577446873f7f9e6b5365421e2c7855e
});
