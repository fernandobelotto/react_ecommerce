import { BuyOrder } from "./BuyOrder";

export type User = {
  userId: string;
  name: string;
  email: string;
  password: string;
  orders: BuyOrder[];
};
