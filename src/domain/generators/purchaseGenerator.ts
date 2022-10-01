import { faker } from "@faker-js/faker";
import { randomEnumValue } from "../../helper/randomEnum";
import { PaymentMethod } from "../enums";
import { Purchase } from "../models/purchase";
import { generateAddress } from "./addressGenerator";
import { generateShoppingBasket } from "./shoppingBasketGenerator";

export const generatePurchase = () : Purchase => {

  const shoppingBasket = generateShoppingBasket()
  const paymentMethod = randomEnumValue(PaymentMethod)

  return {
    ...shoppingBasket,
    address: generateAddress(),
    installments: paymentMethod == PaymentMethod.CREDIT_CARD ? faker.datatype.number({ min: 1, max: 12 }) : 1,
    paymentMethod: paymentMethod,
    purchaseId: faker.datatype.uuid(),
    total: shoppingBasket.items.reduce((p, x) => p+x.finalValue, 0)
  }
}