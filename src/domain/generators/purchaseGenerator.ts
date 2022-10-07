import { faker } from "@faker-js/faker";
import { randomEnumValue } from "../../helper/randomEnum.js";
import { PaymentMethod } from "../enums.js";
import { Purchase } from "../models/purchase.js";
import { generateAddress } from "./addressGenerator.js";
import { generateShoppingBasket } from "./shoppingBasketGenerator.js";

export const generatePurchase = () : Purchase => {

  const shoppingBasket = generateShoppingBasket()
  const paymentMethod = randomEnumValue(PaymentMethod)

  return {
    ...shoppingBasket,
    address: generateAddress(),
    installments: paymentMethod == PaymentMethod.CREDIT_CARD ? faker.datatype.number({ min: 1, max: 12 }) : 1,
    paymentMethod: paymentMethod,
    purchaseId: faker.datatype.uuid(),
    total: shoppingBasket.items.reduce((p, x) => p+x.item.finalValue, 0),
    cartTime: faker.datatype.number({ min: 1, max: 600 })
  }
}