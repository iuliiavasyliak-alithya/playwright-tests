import { test, expect } from '@playwright/test';

test.describe('Main page tests', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto('https://playwright.dev/')
    });
    
test('Check elements navigation on the page', async ({ page }) => {
        test.step('Check Playwright logo', async () => {
            await expect
            .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
            .toBeVisible();
});    
    await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect.soft(page.getByLabel('GitHub repository' )).toBeVisible();
    await expect.soft(page.getByLabel('Discord server' )).toBeVisible();
    await expect.soft(page.getByLabel('Switch between dark and light' )).toBeVisible();
    await expect.soft(page.getByLabel('Search (CTRL+K)' )).toBeVisible();
});

test('Check the header name navigation mane', async ({ page }) => {  
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText('Playwright');
    await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
    await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
    await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
    
});

test('Check attributes navigation on the page', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute('href', '/');
    await expect.soft(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    await expect.soft(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute('href', '/mcp/introduction');
    await expect.soft(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute('href', '/agent-cli/introduction');
    await expect.soft(page.getByRole('link', { name: 'API' })).toHaveAttribute('href', '/docs/api/class-playwright');
    await expect.soft(page.getByLabel('GitHub repository')).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
    await expect.soft(page.getByLabel('Discord server')).toHaveAttribute('href', 'https://aka.ms/playwright/discord');
});

test('Check switch between dark and light mode', async ({ page } ) => {
    await page.getByLabel('Switch between dark and light').click();
    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});    

test('Check title on the main page', async ({ page } ) => {
    
await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Playwright enables reliable' }))
     .toContainText('Playwright enables reliable web automation for testing, scripting, and AI agents.');
});

test('Check button Get started and correct action after click on it', async ({ page } ) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/docs/intro');
});

});