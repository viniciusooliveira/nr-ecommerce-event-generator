import { Address } from "./address.js";
import { PaymentMethod } from "../enums.js";
import { ShoppingBasket } from "./shoppingBasket.js";

export interface Purchase extends ShoppingBasket {
  purchaseId: string,
  address: Address,
  total: number,
  paymentMethod: PaymentMethod,
  installments: number,
  cartTime: number
}