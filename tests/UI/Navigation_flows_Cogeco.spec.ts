import { test, expect } from '@playwright/test';
import { CogecoHomePage } from '../../pages/cogecoHomePage';
import { CogecoNavigationMenus } from '../../pages/cogecoNavigationMenus';  



test.describe('E2E: Cogeco Navigation Flows', () => {
  let home: CogecoHomePage;
  let menu: CogecoNavigationMenus;

//Initializes page objects and navigates to homepage before each test 
test.beforeEach( async ({ page }) => {
        home = new CogecoHomePage(page);
        menu = new CogecoNavigationMenus(page);

    await home.goto();
    });

    //Validate main homepage elements and content
    test('Homepage UI validation', async ({ page }) => {
    
    await expect(home.promoText).toBeVisible();
    await expect(home.promoText).toContainText('The simplest part of your move');
    await expect(home.saveInternetLink).toBeVisible();
    await expect(home.saveInternetLink).toContainText('Save on Internet');
    await expect(home.internetTab).toBeVisible();
    await expect(home.internetTab).toContainText('Internet');
    await expect(home.mobileTab).toBeVisible();
    await expect(home.mobileTab).toContainText('Mobile');
    await expect(home.internetTvTab).toBeVisible();
    await expect(home.internetTvTab).toContainText('Internet + TV');
    await expect(home.homePhoneTab).toBeVisible();
    await expect(home.homePhoneTab).toContainText('Home Phone');
    await expect(home.promotionsTab).toBeVisible();
    await expect(home.promotionsTab).toContainText('Promotions');
    
    await expect(home.residentialLink).toBeVisible();
    await expect(home.businessLink).toBeVisible();
    await expect(home.aboutUsLink).toBeVisible();
    await expect(home.myAccountLink).toBeVisible();
    await expect(home.webmailLink).toBeVisible();
    
    await expect(home.internetButton).toBeVisible();
    await expect(home.mobileButton).toBeVisible();
    await expect(home.tvButton).toBeVisible();
    await expect(home.promosButton).toBeVisible();
    await expect(home.supportButton).toBeVisible();
});

//Navigation: Internet menu
test('Internet menu navigation', async ({ page }) => {
    await home.openInternetMenu();

    await expect(menu.internetWhy).toBeVisible();
    await expect(menu.internetPackages).toBeVisible();
    await expect(menu.internetMobilePackages).toBeVisible();
    await expect(menu.wifi).toBeVisible();
    await expect(menu.wifiExtender).toBeVisible();
    await expect(menu.security).toBeVisible();
    
});

//Navigation: Mobile menu
test('Mobile menu navigation', async ({ page }) => {
    await home.openMobileMenu();

    await expect(menu.mobileWhy).toBeVisible();
    await expect(menu.mobilePlans).toBeVisible();
    await expect(menu.coverageMap).toBeVisible();
    await expect(menu.addOns).toBeVisible();
    await expect(menu.travel).toBeVisible();
    await expect(menu.internetMobilePackages).toBeVisible();
});

//Navigation: TV menu
test('TV menu navigation', async ({ page }) => {
    
    await home.openTVMenu();

    await expect(menu.tvWhy).toBeVisible();
    await expect(menu.internetTVPackages).toBeVisible();
    await expect(menu.epicoApp).toBeVisible();
    await expect(menu.allChannels).toBeVisible();
    await expect(menu.premiumChannels).toBeVisible();
    await expect(menu.sportsChannels).toBeVisible();
    await expect(menu.ownYourMovies).toBeVisible();
    await expect(menu.liveOnDemand).toBeVisible();
    await expect(menu.freePreviews).toBeVisible();
});

//Navigation: Promos menu
test('Promos menu navigation', async ({ page }) => {
    
    await home.openPromosMenu();

    await expect(menu.allOffers).toBeVisible();
    await expect(menu.moving).toBeVisible();
    await expect(menu.students).toBeVisible();
    await expect(menu.referFriend).toBeVisible();
    await expect(menu.internetPackages).toBeVisible();
    await expect(menu.internetMobilePackages).toBeVisible();
    await expect(menu.internetTVPackages).toBeVisible();
    await expect(menu.homePhonePackages).toBeVisible();
    
});

//Navigation: Support menu
test('Support menu navigation', async ({ page }) => {
    
    await home.openSupportMenu();

    await expect(menu.supportInternet).toBeVisible();
    await expect(menu.supportMobile).toBeVisible();
    await expect(menu.epico).toBeVisible();
    await expect(menu.standardTVSupport).toBeVisible();
    await expect(menu.billingAndAccount).toBeVisible();
    await expect(menu.selfInstall).toBeVisible();
    await expect(menu.speedTestTool).toBeVisible();
    await expect(menu.movingSoon).toBeVisible();
    await expect(menu.logInToMyAccount).toBeVisible();
    await expect(menu.logInWebmail).toBeVisible();
    await expect(menu.outages).toBeVisible();
    
});

});