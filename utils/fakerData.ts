import { faker } from '@faker-js/faker';


// Generates realistic user data
export function generateFakeUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    phone: faker.string.numeric(10),
    dateOfBirth: faker.date
      .birthdate({ min: 18, max: 60, mode: 'age' })
      .toISOString()
      .split('T')[0],
    city: faker.location.city(),
    bio: faker.lorem.sentence(),
    password: faker.internet.password({
      length: 12,
      memorable: false,
      pattern: /[A-Za-z0-9!@#$%^&*]/,
    }),
  };
}
