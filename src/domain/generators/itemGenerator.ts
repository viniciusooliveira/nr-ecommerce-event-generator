import { faker } from "@faker-js/faker/locale/pt_BR";

import { Item } from "../models/item";

export const generateItem = () : Item => {

  const cost = faker.datatype.number({
    min: 9.9,
    max: 399.9,
    precision: 0.01
  })

  const final = faker.datatype.number({
    min: 1,
    max: 3,
    precision: 0.01
  }) * cost

  return {
    costValue: cost,
    finalValue: final,
    name: faker.commerce.productName(),
    department: faker.commerce.department()
  }
}