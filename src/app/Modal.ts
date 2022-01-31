export interface Product {
  id: number;
  description: string;
  name: string;
  pictureUrl: string;
  pictureUrl1: string;
  pictureUrl2: string;
  price: number;
  category: string;
}
export class Cart {
  id!: number;
  name!: string;
  description: string;
  price!: number;
  quantity!: number;
  pictureUrl!: string;
  pictureUrl1!: string;
  pictureUrl2!: string;

  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    pictureUrl: string,
    pictureUrl1: string,
    pictureUrl2: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.pictureUrl = pictureUrl;
    this.pictureUrl1 = pictureUrl1;
    this.pictureUrl2 = pictureUrl2;
    this.description = description;
  }
}

export class cartValid {
  cart: Cart[] = [];
  price!: number;
  constructor(cart: Cart[], price: number) {
    this.cart = cart;
    this.price = price;
  }
}

export class ProductOrders {
  name: string;
  quantity!: number;
  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}
export interface user {
  iduser: number;
  username: string;
  email: string;
  telephone: number;
  password: number;
  city: number;
  state: string;
  address: string;
  firstname: string;
  createdAt: string;
  updatedAt: string;
  lastname: string;
}
export interface userDto {
  username: string;
  email: string;
  password: number;
  iat: Number;
  exp: Number;
}
