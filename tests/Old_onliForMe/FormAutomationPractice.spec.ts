import { test, expect } from '../../fixtures/fixtures';
import { PracticePage } from '../../pages/practicePage';

test.describe('Form automation practice tests', () => {
  
  //E2E test with form filling and validation
  test('Form filling and validation', async ({ practicePage, user}) => {
    
    await practicePage.fillForm(user);
    await practicePage.submit();

    await expect(practicePage.successMessage()).toBeVisible();
    await expect(practicePage.successMessage())
      .toContainText('Form Submitted Successfully!');

    
    console.log('Generated user:', user);
  });
  
  test('Component: gender radio group behavior', async ({ practicePage, page}) => {
    
    await practicePage.genderFemaleRadio.check();
    
    await expect(practicePage.genderFemaleRadio).toBeChecked();
    await expect(practicePage.genderMaleRadio).not.toBeChecked();
    await expect(practicePage.genderOtherRadio).not.toBeChecked();
     

//Screenshot of a specific element: part of the "Personal data" page
await page.locator('.p-6')
  .screenshot({ path: `screenshots/radio-${Date.now()}.png` });

});

test('Component: checkbox toggle behavior', async ({ practicePage}) => {

  const checkbox = practicePage.playwrightCheckbox;
    
//initial check
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  //uncheck
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();

  //check again
  await checkbox.check();
  await expect(checkbox).toBeChecked();
    
});


test('Component: selecting one radio disables others', async ({ practicePage }) => {

  await practicePage.genderFemaleRadio.check();

  const maleChecked = await practicePage.genderMaleRadio.isChecked();

  expect(maleChecked).toBe(false);
});


 //Negative tests
  test('Validationerror for invalid email', async ({ practicePage, page, user }) => {
    user.email = 'invalid email';

    await practicePage.fillForm(user);
    await practicePage.submit();

    await expect(page.getByText('Enter a valid email')).toBeVisible();

    await page.locator('.p-6')
  .screenshot({ path: `screenshots/emailError-${Date.now()}.png` });
});


  test('Validation error for missing required fields', async ({ practicePage, page }) => {
    await practicePage.submit();

    await expect(page.getByText('First Name is required')).toBeVisible();

    await page.locator('.p-6')
  .screenshot({ path: `screenshots/firstNameError-${Date.now()}.png` });
});


});

