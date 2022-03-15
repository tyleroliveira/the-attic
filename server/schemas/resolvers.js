const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const {
  User,
  Box
} = require("../models");
const {
  signToken
} = require("../util/auth");



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        console.log("context.user", context.user);
        return User.findOne({ _id: context.user._id }).populate('boxes');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    box: async (parent, { _id }) => {
      return await Box.findById(_id).populate('boxes');
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const user = await User.create({
          ...args
        });
        const token = await signToken(user);
        return {
          user,
          token
        };
      } catch (error) {
        if (error.name === "MongoError" && error.code === 11000) {
          const [
            [key, value]
          ] = Object.entries(error.keyValue);
          throw new UserInputError(`${key} "${value}" already exists.`);
        }
        throw error;
      }
    },
    login: async (parent, args) => {
      const {
        email,
        password
      } = args;
      const user = await User.findOne({
        email
      });
      if (!user) {
        throw new AuthenticationError("Invalid email or password");
      }
      const authentic = await user.isCorrectPassword(password);
      if (!authentic) {
        throw new AuthenticationError("Invalid email or password");
      }
      const token = await signToken(user);
      await user.save();
      return {
        token,
        user
      };
    },
    addBox: async (parent, { title }, context) => {
      if (context.user) {
        const box = await Box.create({ title });

        await User.findByIdAndUpdate(context.user._id, { $push: { boxes: box } });

        return box;
      }

      throw new AuthenticationError('Not logged in');
    },
    addItem: async (parent, { boxId, itemTitle, itemCode, itemLink }, context) => {
      if (context.user) {
        const box = await Box.findByIdAndUpdate(
          { _id: boxId},
          {
            $push: {
              items: { itemTitle, itemCode, itemLink },
            },
          },
          {
            new: true,
          }
        );
        return box
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBox: async (parent, { boxId }, context) => {
      if (context.user) {
        const box = await Box.findOneAndDelete({
          _id: boxId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { boxes: box._id } }
        );

        return box;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeItem: async (parent, { boxId, itemId }, context) => {
      if (context.user) {
        return Box.findOneAndUpdate(
          { _id: boxId },
          {
            $pull: {
              items: {
                _id: itemId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateBox: async (parent, {
      title,
    }, context) => {
      try {
        if (context.box) {
          const updatedBox = await Box.findByIdAndUpdate({
            id: context.box._id
          }, {
            $push: {
              box: {
                title,
              }
            }
          }, {
            new: true,
          });
          return updatedBox;
        }
      } catch (err) {
        console.log(err);
        throw new AuthenticationError('you are not logged in');
      }
    },
    updateItem: async (parent, {
      itemTitle,
      itemCode,
      itemLink
    }, context) => {
      try {
        if (context.item) {
          const updatedItem = await Box.findByIdAndUpdate({
            id: context.item._id
          }, {
            $push: {
              item: {
                itemTitle,
                itemCode,
                itemLink,
              }
            }
          }, {
            new: true,
          });
          return updatedItem;
        }
      } catch (err) {
        console.log(err);
        throw new AuthenticationError('you are not logged in');
      }
    },
  },
};

module.exports = resolvers;