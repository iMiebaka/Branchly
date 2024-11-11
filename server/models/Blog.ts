import mongoose from "mongoose";


const schema = new mongoose.Schema<ITBlogPoJo>({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  editedAt: {
    type: Date,
  },
});

const BlogModel = mongoose.model("Blog", schema);

export default BlogModel;
