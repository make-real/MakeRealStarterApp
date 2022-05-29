export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface IUserResponse {
    user: IUser;
}