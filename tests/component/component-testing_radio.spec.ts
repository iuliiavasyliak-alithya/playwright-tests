
import { test, expect } from '../../fixtures/fixtures';

/**
 * Component Tests: Radio Buttons
 * Purpose:
 * Validate radio group behavior independently from the full form.
 */

test.describe('Component: Radio buttons', () => {

  test('Selecting one radio disables others', async ({ practicePage }) => {

    await practicePage.genderFemaleRadio.check();

    await expect(practicePage.genderFemaleRadio).toBeChecked();
    await expect(practicePage.genderMaleRadio).not.toBeChecked();
    await expect(practicePage.genderOtherRadio).not.toBeChecked();


  });


});
