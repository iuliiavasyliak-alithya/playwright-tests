import { Page, Locator } from "@playwright/test";

export class CogecoHomePage {  
     readonly page: Page;

    // ===== HEADER BUTTONS =====
  readonly internetButton: Locator;
  readonly mobileButton: Locator;
  readonly tvButton: Locator;
  readonly promosButton: Locator;
  readonly supportButton: Locator;

  // ===== LINKS =====
  readonly residentialLink: Locator;
  readonly businessLink: Locator;
  readonly aboutUsLink: Locator;
  readonly myAccountLink: Locator;
  readonly webmailLink: Locator;

  // ===== TABS =====
  //readonly tablist: Locator;
  readonly internetTab: Locator;
  readonly mobileTab: Locator;
  readonly internetTvTab: Locator;
  readonly homePhoneTab: Locator;
  readonly promotionsTab: Locator;


  // ===== MAIN CONTENT =====
  readonly promoText: Locator;
  readonly saveInternetLink: Locator;

  constructor(page: Page) {
    this.page = page
  
    // HEADER BUTTONS
    this.internetButton = page.getByRole('button', { name: 'Internet' });
    this.mobileButton = page.getByRole('button', { name: 'Mobile' });
    this.tvButton = page.getByRole('button', { name: 'TV' });
    this.promosButton = page.getByRole('button', { name: 'Promos' });
    this.supportButton = page.getByRole('banner').getByRole('button', { name: 'Support' });
 
    // LINKS ON TOP
    this.residentialLink = page.getByRole('link', { name: 'Residential' });
    this.businessLink = page.getByRole('link', { name: 'Business' });
    this.aboutUsLink = page.getByRole('link', { name: 'About us' });
    this.myAccountLink = page.getByRole('link', { name: 'My Account', exact: true });
    this.webmailLink = page.getByRole('link', { name: 'Webmail', exact: true });

    // TABS
    //this.internetTab = page.getByRole('tablist');
    this.internetTab = page.getByRole('tab', { name: 'Internet', exact: true });
    this.mobileTab = page.getByRole('tab', { name: 'Mobile' });
    this.internetTvTab = page.getByRole('tab', { name: 'Internet + TV' });
    this.homePhoneTab = page.getByRole('tab', { name: 'Home Phone' });
    this.promotionsTab = page.getByRole('tab', { name: 'Promotions' });

    // MAIN SECTION CONTENT
    this.promoText = page.getByText('The simplest part of your move');
    this.saveInternetLink = page.locator('#grid-r2').getByRole('link', { name: 'Save on Internet', exact: true });
  }

  async goto() {
    await this.page.goto('https://www.cogeco.ca/en');
  }

  // ===== ACTIONS =====
  async openInternetMenu() {
    await this.internetButton.click();
  }

  async openMobileMenu() {
    await this.mobileButton.click();
  }

  async openTVMenu() {
    await this.tvButton.click();
  }

  async openPromosMenu() {
    await this.promosButton.click();
  }

  async openSupportMenu() {
    await this.supportButton.click();
  }
}

