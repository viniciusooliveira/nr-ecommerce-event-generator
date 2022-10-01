import { Item } from "./item";
import { User } from "./user";

export interface ShoppingBasket {
  user?: User | null,
  items: Item[]
}