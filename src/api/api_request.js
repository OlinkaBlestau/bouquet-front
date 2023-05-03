import axios from "axios";

const BASE_PATH_API = "http://localhost/api/";
//const PATH_AUTH = "http://localhost/";

/*const AUTH_HEADERS = (authToken) => {
  return {
    Authorization: `Bearer ${authToken}`,
  };
};*/

export const registration = (data) =>
  axios.post(`${BASE_PATH_API}auth/register`, data);
export const login = (data) => axios.post(`${BASE_PATH_API}auth/login`, data);
/*export const logout = () => axios.post(`${PATH_AUTH}logout`);*/
