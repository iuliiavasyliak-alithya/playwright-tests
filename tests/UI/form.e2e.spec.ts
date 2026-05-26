
import { test, expect } from '../../fixtures/fixtures';

/**
 * E2E Test: Form submission flow
 * Purpose:
 * Validate full user flow from form filling to submission.
 * Ensures application works end-to-end.
 */

test.describe('E2E: Form submission', () => {

  test('Form filling and validation', async ({ practicePage, user }) => {

    // Fill full form with generated data
    await practicePage.fillForm(user);

    // Submit form
    await practicePage.submit();

    // Validate success message
    await expect(practicePage.successMessage()).toBeVisible();
    await expect(practicePage.successMessage())
      .toContainText('Form Submitted Successfully!');

    // Debug info for traceability
    console.log('Generated user:', user);
  });

});
