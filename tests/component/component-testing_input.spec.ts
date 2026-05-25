import { test, expect } from '../../fixtures/fixtures';

/**
 * Component Tests: Input behavior
 * Purpose:
 * Validate that the input correctly accepts and stores user input
 */

test.describe('Component: Input', () => {

  test('First name input accepts user text', async ({ practicePage }) => {

    const testValue = 'John';

    // Fill input field
    await practicePage.firstNameInput.fill(testValue);

    
   // Validate stored value
    const value = await practicePage.firstNameInput.inputValue();


    await expect(value).toBe(testValue);
  });

  });


