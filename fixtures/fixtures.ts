import { test as base } from '@playwright/test';
import { PracticePage } from '../pages/practicePage';
import { generateFakeUser } from '../utils/fakerData';

type TestFixtures = {
  practicePage: PracticePage;
  user: ReturnType<typeof generateFakeUser>;
};

export const test = base.extend<TestFixtures>({
  practicePage: async ({ page }, use) => {
    const practicePage = new PracticePage(page);
    await use(practicePage);
  },

  user: async ({}, use) => {
    const user = generateFakeUser();
    await use(user);
  },
});

export { expect } from '@playwright/test';
