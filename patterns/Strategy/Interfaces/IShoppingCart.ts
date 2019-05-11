import { IPaymentStrategy } from "./IPaymentStrategy";

export interface IShoppingCart extends IPaymentStrategy {
  add: () => any;
  remove: () => any;
  calculateTotal: () => number;
}
