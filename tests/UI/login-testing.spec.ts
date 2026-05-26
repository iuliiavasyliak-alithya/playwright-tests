import { test, expect } from '@playwright/test';

/**
 * Login Tests
 * Purpose:
 * Validate login functionality including:
 * - Successful login
 * - Invalid username
 * - Invalid password
 */

test.describe('E2E: Login Functionality', () => {


//Navigates to login page before each test   
test.beforeEach( async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login')
    });

//Positive scenario: User logs in successfully with valid credentials
test('Successful login with valid credentials', async ({ page }) => {

await page.getByRole('textbox', { name: 'Username' }).fill('practice');
await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('You logged into a secure area!')).toBeVisible();
await expect(page.getByText('You logged into a secure area!')).toContainText('You logged into a secure area!');
await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
});

//Negative scenario: Login fails with invalid username
test('Error displayed for invalid username', async ({ page }) => {

// Fill form with invalid username and valid password
await page.getByRole('textbox', { name: 'Username' }).fill('invalid_user');
await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
await page.getByRole('button', { name: 'Login' }).click();

// Validate error message
const errorMessage = page.getByText('Your username is invalid!');
await expect(errorMessage).toBeVisible();
await expect(errorMessage).toContainText('Your username is invalid!');

//Validate user stays on login page
await expect(page).toHaveURL('https://practice.expandtesting.com/login');
});

//Negative scenario: Login fails with invalid password
test('Error displayed for invalid password', async ({ page }) => {

// Fill form with invalid password and valid username
await page.getByRole('textbox', { name: 'Username' }).fill('practice');
await page.getByRole('textbox', { name: 'Password' }).fill('invalid_password');
await page.getByRole('button', { name: 'Login' }).click();

// Validate error message
const errorMessage = page.getByText('Your password is invalid!');
await expect(errorMessage).toBeVisible();
await expect(errorMessage).toContainText('Your password is invalid!');

//Validate user stays on login page
await expect(page).toHaveURL('https://practice.expandtesting.com/login');

});


});