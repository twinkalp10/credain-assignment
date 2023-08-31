import { faker } from '@faker-js/faker';

const generateDummyTranslation = () => {
  return {
    transactionDate: faker.date.past(),
    invoiceNumber: faker.string.alphanumeric(5),
    payer: faker.person.firstName() + ' ' + faker.person.lastName(),
    payee: faker.person.firstName() + ' ' + faker.person.lastName(),
    amount: faker.number.int({ min: 100, max: 1000 }),
    status: faker.helpers.arrayElement(['First', 'Second', 'Third'])
  }
}

const dummyData = Array.from({ length: 5 }, generateDummyTranslation)

export default dummyData;
