
import { test, expect } from '../../fixtures/fixtures';

/**
 * Validation Tests
 * Purpose:
 * Validate error handling and negative scenarios.
 */

test.describe('Validation: Form errors', () => {

  test('Invalid email validation', async ({ practicePage, page, user }) => {

    user.email = 'invalid email';

    await practicePage.fillForm(user);
    await practicePage.submit();

    await expect(page.getByText('Enter a valid email')).toBeVisible();

    await page.locator('.p-6')
  .screenshot({ path: `screenshots/emailError-${Date.now()}.png` });
  });


  test('Required field validation', async ({ practicePage, page }) => {

    await practicePage.submit();

    await expect(page.getByText('First Name is required')).toBeVisible();

    await page.locator('.p-6')
  .screenshot({ path: `screenshots/firstNameError-${Date.now()}.png` });
  });

});
