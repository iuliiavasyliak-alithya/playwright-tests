import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login')
    });


test('Successful Login', async ({ page }) => {

await page.getByRole('textbox', { name: 'Username' }).fill('practice');
await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('You logged into a secure area!')).toBeVisible();
await expect(page.getByText('You logged into a secure area!')).toContainText('You logged into a secure area!');
await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
});

test('Invalid Username', async ({ page }) => {

await page.getByRole('textbox', { name: 'Username' }).fill('invalid_user');
await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Your username is invalid!')).toBeVisible();
await expect(page.getByText('Your username is invalid!')).toContainText('Your username is invalid!');
await expect(page).toHaveURL('https://practice.expandtesting.com/login');
});

test('Invalid Password', async ({ page }) => {
await page.getByRole('textbox', { name: 'Username' }).fill('practice');
await page.getByRole('textbox', { name: 'Password' }).fill('invalid_password');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Your password is invalid!')).toBeVisible();
await expect(page.getByText('Your password is invalid!')).toContainText('Your password is invalid!');
await expect(page).toHaveURL('https://practice.expandtesting.com/login');

});


