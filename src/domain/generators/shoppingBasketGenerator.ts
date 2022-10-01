import { faker } from "@faker-js/faker";
import { Item } from "../models/item";
import { ShoppingBasket } from "../models/shoppingBasket";
import { generateItem } from "./itemGenerator";
import { generateUser } from "./userGenerator";

export const generateShoppingBasket = () : ShoppingBasket => {

  const itens: Item[] = []

  for(let i = 0; i < faker.datatype.number({ min: 1, max: 55 }); i++)
    itens.push(generateItem())

  return {
    items: itens,
    user: generateUser()
  }
}