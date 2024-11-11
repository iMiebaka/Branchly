import mongoose from "mongoose";


const schema = new mongoose.Schema<ITToken>({
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TokenModel = mongoose.model("Token", schema);

export default TokenModel;
