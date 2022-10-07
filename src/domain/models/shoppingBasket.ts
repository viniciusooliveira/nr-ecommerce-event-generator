import { Item } from "./item.js";
import { User } from "./user.js";

export interface ShoppingBasket {
  user?: User | null,
  items: ShoppingBasketItem[]
}

export interface ShoppingBasketItem{
  item: Item,
  quantity: number
}