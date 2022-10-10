import { faker } from "@faker-js/faker/locale/pt_BR";

import { Item } from "../models/item";

export const generateItem = () : Item => {

  const cost = faker.datatype.number({
    min: 0.99,
    max: 39.99,
    precision: 0.01
  })

  const final = faker.datatype.number({
    min: 0.5,
    max: 2.5,
    precision: 0.01
  }) * cost

  return {
    costValue: cost,
    finalValue: final,
    name: faker.commerce.productName(),
    department: faker.commerce.department()
  }
}