import { MessagingSend } from './messaging-send';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new MessagingSend();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Livro', 145.9));
shoppingCart.addItem(new Product('Mouse', 239.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
