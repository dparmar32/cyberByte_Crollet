const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return User.find();
    },

    profile: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },
  },

  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await User.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, User };
    },


    removeProfile: async (parent, { UserId }) => {
      return User.findOneAndDelete({ _id: UserId });
    },
    removeSkill: async (parent, { UserId }) => {
      return User.findOneAndUpdate(
        { _id: UserId },
        { new: true }
      );
    },

    saveCoin: async (parent, { coinData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedCoins: coinData } },
          { new: true }
        );
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    removeCoin: async (parent, { coinId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCoins: { coinId } } },
          { new: true }
        );
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

  //   saveBook: async (parent, { bookData }, context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findByIdAndUpdate(
  //         { _id: context.user._id },
  //         { $push: { savedBooks: bookData } },
  //         { new: true }
  //       );
    
  //       return updatedUser;
  //     }
    
  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  //   removeBook: async (parent, { bookId }, context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findOneAndUpdate(
  //         { _id: context.user._id },
  //         { $pull: { savedBooks: { bookId } } },
  //         { new: true }
  //       );
    
  //       return updatedUser;
  //     }
    
  //     throw new AuthenticationError('You need to be logged in!');
  //   },

  // },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    savedCoins: async (parent, { coinData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedCoins: coinData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeCoin: async (parent, { coinId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCoins: { coinId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
},

module.exports = resolvers
