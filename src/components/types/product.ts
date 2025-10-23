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
};
export type User = {
  name?: string;
  email: string;
    password: string;
  role?: string;
};
  
