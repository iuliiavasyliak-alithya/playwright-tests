
import { Page, Locator } from '@playwright/test';

export class CogecoNavigationMenus {
  readonly page: Page;

  // INTERNET
  readonly internetWhy: Locator;
  readonly internetPackages: Locator;
  readonly internetMobilePackages: Locator;
  readonly wifi: Locator;
  readonly wifiExtender: Locator;
  readonly security: Locator;

  // MOBILE
  readonly mobileWhy: Locator;
  readonly mobilePlans: Locator;
  readonly coverageMap: Locator;
  readonly addOns: Locator;
  readonly travel: Locator;
  
  // TV
  readonly tvWhy: Locator;
  readonly internetTVPackages: Locator;
  readonly epicoApp: Locator;
  readonly allChannels: Locator;
  readonly premiumChannels: Locator;
  readonly sportsChannels: Locator;
  readonly ownYourMovies: Locator;
  readonly liveOnDemand: Locator;
  readonly freePreviews: Locator;

  // PROMOS
  readonly allOffers: Locator;
  readonly moving: Locator;
  readonly students: Locator;
  readonly referFriend: Locator;
  readonly homePhonePackages: Locator;

  // SUPPORT
  readonly supportInternet: Locator;
  readonly supportMobile: Locator;
  readonly epico: Locator;
  readonly standardTVSupport: Locator;
  readonly billingAndAccount: Locator;
  readonly selfInstall: Locator;
  readonly speedTestTool: Locator;
  readonly movingSoon: Locator;
  readonly logInToMyAccount: Locator;
  readonly logInWebmail: Locator;
  readonly outages: Locator;


  constructor(page: Page) {
    this.page = page;

    // INTERNET
    this.internetWhy = page.getByRole('menuitem', { name: 'Internet Why Cogeco Internet' });
    this.internetPackages = page.getByLabel('Internet Packages').first();
    this.internetMobilePackages = page.getByRole('link', { name: 'Internet + Mobile Packages'}).first();
    this.wifi = page.getByRole('link', { name: 'Cogeco Wi-Fi', exact: true });
    this.wifiExtender = page.getByRole('link', { name: 'Cogeco Wi-Fi extender'});
    this.security = page.getByRole('link', { name: 'Cogeco Security'});

    // MOBILE
    this.mobileWhy = page.getByRole('link', { name: 'Why Cogeco Mobile?'});
    this.mobilePlans = page.getByRole('link', { name: 'Plans' });
    this.coverageMap = page.getByRole('link', { name: 'Coverage map' }).first();
    this.addOns = page.getByRole('link', { name: 'Add-ons'});
    this.travel = page.getByRole('link', { name: 'Travel'});

    // TV
    this.tvWhy = page.getByRole('link', { name: 'Why Cogeco Internet + TV?'});
    this.internetTVPackages = page.getByRole('link', { name: 'Internet + TV packages'}).first();
    this.epicoApp = page.getByRole('link', { name: 'EPICO app' });
    this.allChannels = page.getByRole('link', { name: 'All channels' });
    this.premiumChannels = page.getByRole('link', { name: 'Premium channels' });
    this.sportsChannels = page.getByRole('link', { name: 'Sports channels' });
    this.ownYourMovies = page.getByRole('link', { name: 'Own your movies' });
    this.liveOnDemand = page.getByRole('link', { name: 'Live and On Demand' });
    this.freePreviews = page.getByRole('link', { name: 'Free previews' });

    // PROMOS
    this.allOffers = page.getByRole('link', { name: 'All offers' });
    this.moving = page.getByRole('link', { name: 'Moving', exact: true});
    this.students = page.getByRole('link', { name: 'Students' });
    this.referFriend = page.getByRole('link', { name: 'Refer a friend'}).first();
    this.homePhonePackages = page.getByRole('link', { name: 'Home Phone packages'}).first();

    // SUPPORT
    this.supportInternet = page.getByRole('link', { name: 'Internet' }).first();
    this.supportMobile = page.getByRole('link', { name: 'Mobile' }).first();
    this.epico = page.getByRole('link', { name: 'EPICO'}).first();
    this.standardTVSupport = page.getByRole('link', { name: 'Standard TV support'}).first();
    this.billingAndAccount = page.getByRole('link', { name: 'Billing and account'}).first();
    this.selfInstall = page.getByRole('link', { name: 'Self-install'}).first();
    this.speedTestTool = page.getByRole('link', { name: 'Speed test tool'}).first();
    this.movingSoon = page.getByRole('link', { name: 'Moving soon?'}).first();
    this.logInToMyAccount = page.getByRole('link', { name: 'Log in to My Account'}).first();
    this.logInWebmail = page.getByRole('link', { name: 'Log in to Webmail'}).first();
    this.outages = page.getByRole('link', { name: 'Outages'}).first();
  }
}
