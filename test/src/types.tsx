export interface Menu {
  _id: string;
  name: string;
  description: string;
}

export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  menuId: string;
}