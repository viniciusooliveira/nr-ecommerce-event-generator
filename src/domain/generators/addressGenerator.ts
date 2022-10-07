import { faker } from '@faker-js/faker'
import { Address } from '../models/address.js'

export const generateAddress = () : Address => {
  return {
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude()
  }
}