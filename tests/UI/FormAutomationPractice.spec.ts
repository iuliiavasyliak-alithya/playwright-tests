import { test, expect } from '../../fixtures/fixtures';

test.describe('Form automation practice tests', () => {
  test('Form filling and validation', async ({ practicePage, user}) => {
    await practicePage.formAutomationPractice();
    await practicePage.fillForm(user);
    await practicePage.submit();

    await expect(practicePage.successMessage()).toBeVisible();
    await expect(practicePage.successMessage())
      .toContainText('Form Submitted Successfully!');

    
    console.log('Generated user:', user);
  });
  test('Form filling and validation radiobuttons/checkboxes', async ({ practicePage, page}) => {
    await practicePage.formAutomationPractice();
    await page.getByTestId('radio-gender-female').check();
    await page.getByTestId('checkbox-interest-playwright').check();   

    await expect(page.getByTestId('radio-gender-female')).toBeChecked();
    await expect(page.getByTestId('radio-gender-male')).not.toBeChecked();
    await expect(page.getByTestId('radio-gender-other')).not.toBeChecked();
    await expect(page.getByTestId('checkbox-interest-playwright')).toBeChecked();
    await expect(page.getByTestId('checkbox-interest-selenium')).not.toBeChecked(); 
    await expect(page.getByTestId('checkbox-interest-cypress')).not.toBeChecked(); 


//Screenshot of a specific element: part of the "Personal data" page
await page.locator('.p-6')
  .screenshot({ path: 'screenshots/radio.png' });

//Full page screenshot
await page.screenshot({ path: 'screenshots/full.png', fullPage: true });

});
});

