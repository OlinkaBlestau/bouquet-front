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
export const getUser = (id) => axios.get(`${BASE_PATH_API}users/${id}`);
export const updateUser = (id, data) =>
  axios.put(`${BASE_PATH_API}users/${id}`, data);

export const getShop = (id) => axios.get(`${BASE_PATH_API}shops/${id}`);
export const updateShop = (id, data) =>
  axios.put(`${BASE_PATH_API}shops/${id}`, data);

export const createDecor = (data) => axios.post(`${BASE_PATH_API}decors`, data);
/*export const logout = () => axios.post(`${PATH_AUTH}logout`);*/
export const imageDecorUpload = (id, data) =>
  axios.post(`${BASE_PATH_API}image/upload/decor/${id}`, data);

export const createFlower = (data) =>
  axios.post(`${BASE_PATH_API}flowers`, data);
/*export const logout = () => axios.post(`${PATH_AUTH}logout`);*/
export const imageFlowerUpload = (id, data) =>
  axios.post(`${BASE_PATH_API}image/upload/flower/${id}`, data);

export const getDecors = () => axios.get(`${BASE_PATH_API}decors`);
export const getFlowers = () => axios.get(`${BASE_PATH_API}flowers`);
