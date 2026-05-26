import { test as base } from '@playwright/test';
import { PracticePage } from '../pages/practicePage';
import { generateFakeUser } from '../utils/fakerData';

/**
 * FILE: fixtures.ts
 *
 * Purpose:
 * Extend Playwright's base test with custom fixtures:
 * - Page Object (PracticePage)
 * - Dynamic user test data
 * 
 * Design:
 * Fixtures are automatically executed before each test,
 * providing consistent test state and reusable resources.
 *
 * Why:
 * - Avoid repeating setup logic in every test
 * - Improve readability by injecting ready-to-use objects
 * - Centralize test initialization for scalability
 *
 */
 
// Define custom fixtures type for TypeScript
type TestFixtures = {
  practicePage: PracticePage;
  user: ReturnType<typeof generateFakeUser>;
};

//Extend Playwright test with custom fixtures
export const test = base.extend<TestFixtures>({

  // Initialize PracticePage fixture
  practicePage: async ({ page }, use) => {
    const practicePage = new PracticePage(page);

    // Navigate automatically before test
    await practicePage.formAutomationPractice();

    // Provide it to the test
    await use(practicePage);
  },


  // Initialize user fixture with dynamic data
  user: async ({}, use) => {
    const user = generateFakeUser();

    // Provide generated user to test
    await use(user);
  },
});

// Re-export expect for convenience in tests
export { expect } from '@playwright/test';
