import { faker } from "@faker-js/faker"
import { generatePurchaseAndSendEvent } from "./event.js"

let tps = 10
let max = 0
let count = 0



const timeoutFunction = async () => {
  if(count < max){
    for (let i = 0; i<tps; i++) {
      setTimeout(generatePurchaseAndSendEvent, faker.datatype.number({ min: 100, max: 700 }))
    }
    count++
  }else{
    tps = faker.datatype.number({ min: 10, max: 500 })
    max = faker.datatype.number({ min: 45*60, max: 60*60 })
    console.log(`New TPS: ${tps} for ${max/60} minutes`)
    count = 0
  }
  setTimeout(timeoutFunction, 1000)
  // console.log(`Remaining ${max-count} seconds with ${tps} TPS`)
}

timeoutFunction()

// while(count < max){
//   setInterval(timeoutFunction, 1000)
// }
// setInterval(timeoutFunction, 1000)
// await generatePurchaseAndSendEvent()