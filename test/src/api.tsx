import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/menu';

export const getMenus = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const createMenu = async (menu: { name: string; description: string }) => {
  const response = await axios.post(`${API_BASE_URL}`, menu);
  return response.data;
};

export const getMenuItems = async (menuId: string) => {
  const response = await axios.get(`${API_BASE_URL}/${menuId}/menuitem`);
  return response.data;
};

export const createMenuItem = async (menuId: string, item: { name: string; description: string; price: number }) => {
  const response = await axios.post(`${API_BASE_URL}/${menuId}/menuitem`, item);
  return response.data;
};