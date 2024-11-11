declare interface ITBlogPoJo {
  _id?: mongoose.Types.ObjectId | ShopDocLean;
  title: string;
  description: string;
  image: string;
  body: string;
  createdAt: Date;
  editedAt: Date;
  author: ITUserPoJo;
}
