import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default:
        "https://www.svgrepo.com/show/452030/avatar-default.svg",
    },
  },
  { timestamps: true }
);

const UserModel=mongoose.model('Users',UserSchema);
export default UserModel;