import mongoose from "mongoose";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import TokenModel from "./Token"

const UserSchema = new mongoose.Schema<ITUserPoJo>({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
  },
  username: {
    type: String,
    unique: true
  },
  name: {
    type: String,
  },
  publicId: {
    type: String,
    required: true,
    default: v4()
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }}
).pre("save", async function (next) {
  // Check if the password has been modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hash and salt the password
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password!, salt);

  this.publicId = v4();
  // Call the next middleware function
  next();
})


UserSchema.methods.comparePassword = async function (agencyPassword: String) {
  return await bcrypt.compare(agencyPassword.valueOf(), this.password);
};


UserSchema.methods.generateToken = async function () {
  const accessToken =  jwt.sign({ user: this.publicId }, useRuntimeConfig().apiSecret.JWT_SECRET, {
    expiresIn: useRuntimeConfig().apiSecret.JWT_ACCESS_TOKEN_EXPIRES_IN,
  });
  const refreshToken =  jwt.sign({ user: this.publicId }, useRuntimeConfig().apiSecret.JWT_SECRET, {
    expiresIn: useRuntimeConfig().apiSecret.JWT_REFRESH_TOKEN_EXPIRES_IN,
  });
  const result =  {
    accessToken,
    refreshToken
  }
  await TokenModel.create({...result, user: this})
  return result
};


const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
