import { Address } from "./address";
import { PaymentMethod } from "../enums";
import { ShoppingBasket } from "./shoppingBasket";

export interface Purchase extends ShoppingBasket {
  purchaseId: string,
  address: Address,
  total: number,
  paymentMethod: PaymentMethod,
  installments: number
}