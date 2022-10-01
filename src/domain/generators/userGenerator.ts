import { faker } from "@faker-js/faker";
import { User } from "../models/user";

export const generateUser = () : User => {
  return {
    age: faker.datatype.number({ min: 14, max: 89}),
    gender: faker.name.sex()
  }
}