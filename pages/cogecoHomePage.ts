import { Page, Locator } from "@playwright/test";


/**
 * Page Object: Cogeco Home Page
 *
 * Purpose:
 * Represents the main Cogeco homepage and encapsulates:
 * - Header navigation
 * - Links and tabs
 * - Main content elements
 *
 * Design:
 * - Uses stable locators (roles, accessible names)
 * - Groups elements logically (header, tabs, content)
 * - Provides reusable actions for navigation menus
 *
 * Why:
 * Centralizing UI logic improves maintainability and avoids duplication in tests.
 */



export class CogecoHomePage {  
     readonly page: Page;

// ===== HEADER BUTTONS =====
  // Main navigation buttons used to open menus
  readonly internetButton: Locator;
  readonly mobileButton: Locator;
  readonly tvButton: Locator;
  readonly promosButton: Locator;
  readonly supportButton: Locator;

  
// ===== TOP NAVIGATION LINKS =====
  // Links available at the top of the page (global navigation)
  readonly residentialLink: Locator;
  readonly businessLink: Locator;
  readonly aboutUsLink: Locator;
  readonly myAccountLink: Locator;
  readonly webmailLink: Locator;

// ===== TABS =====
  // Tabs displayed on the homepage for product navigation
  readonly internetTab: Locator;
  readonly mobileTab: Locator;
  readonly internetTvTab: Locator;
  readonly homePhoneTab: Locator;
  readonly promotionsTab: Locator;


// ===== MAIN CONTENT =====
  // Main promotional content displayed on homepage
  //readonly promoText: Locator;
  readonly saveInternetLink: Locator;

  constructor(page: Page) {
    this.page = page
  
    // HEADER BUTTONS (main navigation entry points
    this.internetButton = page.getByRole('button', { name: 'Internet' });
    this.mobileButton = page.getByRole('button', { name: 'Mobile' });
    this.tvButton = page.getByRole('button', { name: 'TV' });
    this.promosButton = page.getByRole('button', { name: 'Promos' });
    this.supportButton = page.getByRole('banner').getByRole('button', { name: 'Support' });
 
    // GLOBAL LINKS (top navigation)
    this.residentialLink = page.getByRole('link', { name: 'Residential' });
    this.businessLink = page.getByRole('link', { name: 'Business' });
    this.aboutUsLink = page.getByRole('link', { name: 'About us' });
    this.myAccountLink = page.getByRole('link', { name: 'My Account', exact: true });
    this.webmailLink = page.getByRole('link', { name: 'Webmail', exact: true });

    // PRODUCT TABS (displayed on homepage)
    this.internetTab = page.getByRole('tab', { name: 'Internet', exact: true });
    this.mobileTab = page.getByRole('tab', { name: 'Mobile' });
    this.internetTvTab = page.getByRole('tab', { name: 'Internet + TV' });
    this.homePhoneTab = page.getByRole('tab', { name: 'Home Phone' });
    this.promotionsTab = page.getByRole('tab', { name: 'Promotions' });

    // MAIN CONTENT (homepage banner + promotional content)
    //this.promoText = page.getByText('The simplest part of your move');
    this.saveInternetLink = page.locator('#grid-r2').getByRole('link', { name: 'Save on Internet', exact: true });
  }

  //Navigate to homepage 
  async goto() {
  
     await this.page.goto('https://www.cogeco.ca/en');

     
  }

  // ===== ACTIONS =====
  
  //Opens Internet menu
  async openInternetMenu() {
    await this.internetButton.click();
  }
  
  //Opens Mobile menu
  async openMobileMenu() {
    await this.mobileButton.click();
  }

  //Opens TV menu
  async openTVMenu() {
    await this.tvButton.click();
  }

  //Opens Promos menu
  async openPromosMenu() {
    await this.promosButton.click();
  }

  //Opens Support menu
  async openSupportMenu() {
    await this.supportButton.click();
  }
}

