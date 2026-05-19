import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
        await page.goto('https://www.cogeco.ca/en')
    });

    test('Check the main page', async ({ page }) => {
    

    await expect(page.getByRole('paragraph').filter({ hasText: 'The simplest part of your move' })).toBeVisible();
    await expect(page.locator('#grid-r2')).toContainText('The simplest part of your move');
    await expect(page.locator('#grid-r2').getByRole('link', { name: 'Save on Internet', exact: true })).toBeVisible();
    await expect(page.locator('#grid-r2')).toContainText('Save on Internet');
    await expect(page.getByRole('tablist')).toContainText('Internet');
    await expect(page.getByRole('tab', { name: 'Mobile' })).toBeVisible();
    await expect(page.getByRole('tablist')).toContainText('Mobile');
    await expect(page.getByRole('tab', { name: 'Internet + TV' })).toBeVisible();
    await expect(page.getByRole('tablist')).toContainText('Internet + TV');
    await expect(page.getByRole('tab', { name: 'Home Phone' })).toBeVisible();
    await expect(page.getByRole('tablist')).toContainText('Home Phone');
    await expect(page.getByRole('tab', { name: 'Promotions' })).toBeVisible();
    await expect(page.getByRole('tablist')).toContainText('Promotions');
    await expect(page.getByRole('link', { name: 'Residential' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'My Account', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Webmail', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Internet' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Mobile' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'TV' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Promos' })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('button', { name: 'Support' })).toBeVisible();
});

test('Check Internet navigation', async ({ page }) => {
    await page.getByRole('button', { name: 'Internet' }).click();
    await expect(page.getByRole('menuitem', { name: 'Internet Why Cogeco Internet' })).toBeVisible();
    await expect(page.getByLabel('Internet Packages').first()).toBeVisible();
    await expect(page.getByLabel('Internet + Mobile Packages').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Cogeco Wi-Fi', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Cogeco Wi-Fi extender'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Cogeco Security'})).toBeVisible();
    
});

test('Check Mobile navigation', async ({ page }) => {
    await page.getByRole('button', { name: 'Mobile' }).click();
    await expect(page.getByRole('link', { name: 'Why Cogeco Mobile?'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Plans'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Coverage map'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Add-ons'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Travel'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Internet + Mobile Packages'}).first()).toBeVisible();
});

test('Check TV navigation', async ({ page }) => {
    
    await page.getByRole('button', { name: 'TV' }).click();
    await expect(page.getByRole('link', { name: 'Why Cogeco Internet + TV?'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Internet + TV packages'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'EPICO app'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'All channels'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Premium channels'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sports channels'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Own your movies'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Live and On Demand'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Free previews'})).toBeVisible();
});

test('Check Promos navigation', async ({ page }) => {
    
    await page.getByRole('button', { name: 'Promos' }).click();
    await expect(page.getByRole('link', { name: 'All offers'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Moving', exact: true})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Students'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Refer a friend'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Internet packages'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Internet + Mobile packages'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Internet + TV packages'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home Phone packages'}).first()).toBeVisible();
    
});

test('Check Support navigation', async ({ page }) => {
    
    await page.getByRole('banner').getByRole('button', { name: 'Support' }).click();
    await expect(page.getByRole('link', { name: 'Internet'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mobile'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'EPICO'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Standard TV support'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Billing and account'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Self-install'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Speed test tool'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Moving soon?'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log in to My Account'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log in to Webmail'}).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Outages'}).first()).toBeVisible();
    
});