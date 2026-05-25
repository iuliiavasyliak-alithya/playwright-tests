
import { test, expect } from '../../fixtures/fixtures';

/**
 * Component Tests: Checkbox
 * Purpose:
 * Validate toggle behavior (check/uncheck).
 */

test.describe('Component: Checkbox behavior', () => {

  test('Checkbox toggle behavior', async ({ practicePage }) => {

    const checkbox = practicePage.playwrightCheckbox;

    // Check
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    // Uncheck
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();

    // Check again
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  });

});
