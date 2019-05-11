import { IPaymentStrategy } from "./Interfaces/IPaymentStrategy";

export default class CreditCardStrategy implements IPaymentStrategy {
  public name: string;
  public cardNumber: string;
  public cvv: string;
  public dateOfExpiry: string;

  constructor(
    name: string,
    cardNumber: string,
    cvv: string,
    dateOfExpiry: string
  ) {
    this.name = name;
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.dateOfExpiry = dateOfExpiry;
  }

  public pay (): void {
    console.log(this)
  }
}
