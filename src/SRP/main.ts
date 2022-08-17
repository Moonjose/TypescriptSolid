import { Order } from './entities/order';
import { Persistency } from './services/persistency';

import { MessagingSend } from './services/messaging-send';
import { ShoppingCart } from './entities/shopping-cart';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new MessagingSend();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Livro', 145.9));
shoppingCart.addItem(new Product('Mouse', 49.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
