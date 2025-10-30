export type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  offerPrice: number;
  image: string[];
  description: string[];
  createdAt: string;
  updatedAt: string;
  inStock: boolean;
  quantity?: number;
  weight?: string;
};
export type User = {
  name?: string;
  email: string;
  password: string;
  role?: string;
};

export type Address = {
  _id?: string;
  userId?: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: number;
  country: string;
  phone: string;
};

export type OrderItem = {
  product: Product;
  quantity: number;
  _id?: string;
};

export type Order = {
  _id: string;
  userId: string;
  items: OrderItem[];
  address: Address;
  amount: number;
  paymentType: string;
  status?: string;
  isPaid: boolean;
  createdAt: string;
  updatedAt: string;
};
