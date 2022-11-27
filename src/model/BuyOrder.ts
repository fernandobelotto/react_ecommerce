import { Address } from "./Address";
import { Cart } from "./Cart";
import { PaymentMethod } from "./PaymentMethod";
import { User } from "./User";

export type BuyOrder = {
  buyOrderId: string;
  createdAt: string;
  value: string;
  cart: Cart;
  user: User;
  address: Address;
  paymentMethod: PaymentMethod;
};
