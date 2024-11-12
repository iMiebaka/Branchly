import api from "./api";
import { API_V1_ROUTE } from "./routes";

const logout = async (data: ITLogin) => {
  try {
    return await api<any>({
      url: API_V1_ROUTE.logout,
      data,
    });
  } catch (err) {
    import.meta.env.DEV && console.error(err);
    throw err;
  }
};

const profile = async () => {
  try {
    return await api<ITUserPoJo>({
      url: API_V1_ROUTE.profile,
    });
  } catch (err) {
    import.meta.env.DEV && console.error(err);
    throw err;
  }
};

const ACCOUNT_SERVICES = {
  logout,
  profile,
};

export default ACCOUNT_SERVICES;
