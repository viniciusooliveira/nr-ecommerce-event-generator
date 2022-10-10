import { faker } from "@faker-js/faker";
import { ShoppingBasket, ShoppingBasketItem } from "../models/shoppingBasket.js";
import { generateItem } from "./itemGenerator.js";
import { generateUser } from "./userGenerator.js";

export const generateShoppingBasket = () : ShoppingBasket => {

  const itens: ShoppingBasketItem[] = []

  for(let i = 0; i < faker.datatype.number({ min: 1, max: 10 }); i++)
    itens.push({
      item: generateItem(),
      quantity: faker.datatype.number({ min: 1, max: 9 })
    })

  return {
    items: itens,
    user: generateUser()
  }
}