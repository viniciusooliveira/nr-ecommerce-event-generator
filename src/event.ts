import * as dotenv from 'dotenv'
dotenv.config()

import { generatePurchase } from "./domain/generators/purchaseGenerator.js"
import { Purchase } from "./domain/models/purchase.js"
import { sendEvents } from './service/newrelicHttpService.js'

const generatePurchaseEvent = (data: Purchase) : any => {
  return {
    purchaseId: data.purchaseId,
    totalValue: data.total,
    totalCost: data.items.reduce((v, i) => v+i.item.costValue, 0),
    cartTime: data.cartTime,
    installments: data.installments,
    paymentMethod: data.paymentMethod,
    itemQuantity: data.items.length,
    userGender: data.user?.gender,
    userAge: data.user?.age,
    deliveryAddressLatitude: data.address.latitude,
    deliveryAddressLongitude: data.address.longitude
  }
}

const generatePurchaseItemsEvent = (data: Purchase) : any[] => {

  return data.items.map(
    (i) => {
      return {
        purchaseId: data.purchaseId,
        value: i.item.finalValue,
        cost: i.item.costValue,
        totalValue: i.item.finalValue * i.quantity,
        totalCost: i.item.costValue * i.quantity,
        itemQuantity: i.quantity,
        itemName: i.item.name,
        itemDepartment: i.item.department,
        userGender: data.user?.gender,
        userAge: data.user?.age,
        deliveryAddressLatitude: data.address.latitude,
        deliveryAddressLongitude: data.address.longitude
      }
  })
}

export const generatePurchaseAndSendEvent = async () => {
  const purchase = generatePurchase()

  const teste = JSON.stringify(purchase)

  const events = []

  events.push({ ...generatePurchaseEvent(purchase), eventType: 'Purchase'})

  generatePurchaseItemsEvent(purchase).forEach(e => {
    // nr.recordCustomEvent('Purchase_Items', e)
    events.push({ ...e, eventType: 'Purchase_Items'})
  });

  await sendEvents(events)
}