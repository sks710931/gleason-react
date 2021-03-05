export interface IUser{
  username: string;
  password: string;
  email: string;
  name: string;
  id:number;
}

export interface IUserLoginSuccessResponse{
  message: string;
  status: string;
  user: IUser;
}
export interface IUserLoginRequest{
  username: string;
  password: string;
}