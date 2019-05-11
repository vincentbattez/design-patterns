console.log('----- ()');

import ShoppingCart from "./ShoppingCart";
import CreditCardStrategy from "./CreditCardStrategy";

const creditCardStrategy = new CreditCardStrategy('visa', '123', '415', '0420');
const cart = new ShoppingCart(creditCardStrategy);

console.log(cart);
