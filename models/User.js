const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: "Username is required!",
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: "E-mail is required!",
      validate: [/.+@.+\..+/, 'Please enter a valid e-mail address.']
    },
    // array of _id values referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // array of _id values referencing the User model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// create User model using UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;