import api from "./api";
import { API_V1_ROUTE } from "./routes";

const login = async (data: ITLogin) => {
  try {
    return await api<ITLoginToken>({
      url: API_V1_ROUTE.login,
      data,
      secure: false,
      method: "POST",
    });
  } catch (err) {
    import.meta.env.DEV && console.log(err)
    throw err;
  }
};

const createAccount = async (data: ITRegister) => {
  try {
    return await api<ITLoginToken>({
      url: API_V1_ROUTE.register,
      data,
      secure: false,
      method: "POST",
    });
  } catch (err) {
    import.meta.env.DEV && console.log(err)
    throw err;
  }
};

const getResetPassword = async (data: string) => {
  try {
    return await api<any>({
      url: API_V1_ROUTE.login,
      data,
      secure: false,
    });
  } catch (err) {
    import.meta.env.DEV && console.log(err)
    throw err;
  }
};


const resetPassword = async (data: ITResetPassword) => {
  try {
    return await api<any>({
      url: API_V1_ROUTE.login,
      data,
      secure: false,
      method: "POST",
    });
  } catch (err) {
    import.meta.env.DEV && console.log(err)
    throw err;
  }
};

const forgotPassword = async (data: ITLogin) => {
  try {
    return await api<any>({
      url: API_V1_ROUTE.register,
      data,
      secure: false,
      method: "POST",
    });
  } catch (err) {
    import.meta.env.DEV && console.log(err)
    throw err;
  }
};


const SERVICE_AUTH = {
  login,
  createAccount,
  getResetPassword,
  resetPassword,
  forgotPassword
};

export default SERVICE_AUTH;
