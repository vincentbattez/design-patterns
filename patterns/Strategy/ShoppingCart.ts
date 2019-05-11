import { IPaymentStrategy } from './Interfaces/IPaymentStrategy';
import { IShoppingCart } from "./Interfaces/IShoppingCart";

export default class ShoppingCart implements IShoppingCart{
  public IPaymentStrategy: IPaymentStrategy;

  constructor(IPaymentStrategy: IPaymentStrategy) {
    this.IPaymentStrategy = IPaymentStrategy;
  }

  public pay (): void {
    this.IPaymentStrategy.pay();
  }

  public add (): any {

  }

  public remove (): any {

  }

  public calculateTotal (): number {
    return 1
  };
}
