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
export const getShops = () => axios.get(`${BASE_PATH_API}shops`);
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
export const getAllOrders = () => axios.get(`${BASE_PATH_API}orders`);
export const getMyOrders = (id) =>
  axios.get(`${BASE_PATH_API}orders/user/${id}`);
export const getOrder = (id) => axios.get(`${BASE_PATH_API}orders/${id}`);

export const getFlowers = () => axios.get(`${BASE_PATH_API}flowers`);
export const updateDecor = (id, data) =>
  axios.put(`${BASE_PATH_API}decors/${id}`, data);
export const updateFlower = (id, data) =>
  axios.put(`${BASE_PATH_API}flowers/${id}`, data);
export const updateBouquet = (id, data) =>
  axios.put(`${BASE_PATH_API}bouquets/${id}`, data);
export const getFlower = (id) => axios.get(`${BASE_PATH_API}flowers/${id}`);
export const getDecor = (id) => axios.get(`${BASE_PATH_API}decors/${id}`);
export const deleteDecor = (id) => axios.delete(`${BASE_PATH_API}decors/${id}`);
export const deleteFlower = (id) =>
  axios.delete(`${BASE_PATH_API}flowers/${id}`);

export const deleteBouquet = (id) =>
  axios.delete(`${BASE_PATH_API}bouquets/${id}`);
export const createBouquet = (data) =>
  axios.post(`${BASE_PATH_API}bouquets`, data);

export const getBouquet = (id) => axios.get(`${BASE_PATH_API}bouquets/${id}`);

export const imageBouquetUpload = (id, data) =>
  axios.post(`${BASE_PATH_API}image/upload/bouquet/${id}`, data);
export const getBouquets = () => axios.get(`${BASE_PATH_API}bouquets`);

export const getStripeIntent = (id) =>
  axios.get(`${BASE_PATH_API}stripe/intent/${id}`);

export const purchase = (data) =>
  axios.post(`${BASE_PATH_API}stripe/purchase/`, data);

export const getSaleStatistic = (params) =>
  axios.get(`${BASE_PATH_API}statistic/sale/`, { params });
