import {AxiosResponse} from 'axios';
import useAxios from '.';
import {IUserResponse} from '../interfaces/IUser';

interface ILoginProps {
  phone: string;
}
interface ILoginResponse {
  message: string;
  sessionId: string;
}
export const login = async (
  data: ILoginProps,
): Promise<AxiosResponse<ILoginResponse>> => {
  return await useAxios.post('user-auth/login', {
    phone: data.phone,
  });
};

interface IRegisterProps {
  fullName: string;
  email: string;
  phone: string;
}
export const register = async (
  data: IRegisterProps,
): Promise<AxiosResponse<{sessionId: string}>> => {
  return await useAxios.post('user-auth/register', {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
  });
};

interface IOTPProps {
  sessionId: string;
  otp: string;
}
export const verifyOTP = async (
  data: IOTPProps,
): Promise<AxiosResponse<{jwtToken: String}>> => {
  return await useAxios.post('user-auth/otp-verify', {
    sessionId: data.sessionId,
    otp: data.otp,
  });
};

export const getProfile = async (): Promise<AxiosResponse<IUserResponse>> => {
  return await useAxios.get('user');
};
