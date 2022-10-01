import * as dotenv from 'dotenv'
dotenv.config()

import * as nr from 'newrelic'
import { PaymentMethod } from './domain/enums'
import { generatePurchase } from './domain/generators/purchaseGenerator'


// nr.recordMetric('Cart/ChargeAmount', 29.99)

// nr.recordCustomEvent('Cart_Purchase', {
//     TotalValue: 29.99,
//     ItemQuantity: 3,
//     CartTimeDuration: 600,
//     PaymentMethod: PaymentMethod.CREDIT_CARD,
//     Installments: 1
// })

console.log('funciona!!')

console.log(JSON.stringify(generatePurchase()))