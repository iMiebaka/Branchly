declare interface ITUserPoJo {
  _id: any;
  email: string;
  password: string;
  username: string;
  name: string;
  publicId: string;
  createdAt: Date;
  comparePassword: (val: string) => Promise<boolean>
  generateToken: () => Promise<ITToken>
}


declare interface ITToken {
  _id: any;
  accessToken: string;
  refreshToken: string;
  user: ITUserPoJo;
  createdAt: Date;
}
