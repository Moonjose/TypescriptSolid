import { CartItem } from './protocols/car-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
