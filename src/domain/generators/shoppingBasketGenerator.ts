import { faker } from "@faker-js/faker";
import { ShoppingBasket, ShoppingBasketItem } from "../models/shoppingBasket.js";
import { generateItem } from "./itemGenerator.js";
import { generateUser } from "./userGenerator.js";

export const generateShoppingBasket = () : ShoppingBasket => {

  const itens: ShoppingBasketItem[] = []

  for(let i = 0; i < faker.datatype.number({ min: 1, max: 55 }); i++)
    itens.push({
      item: generateItem(),
      quantity: faker.datatype.number({ min: 1, max: 99 })
    })

  return {
    items: itens,
    user: generateUser()
  }
}