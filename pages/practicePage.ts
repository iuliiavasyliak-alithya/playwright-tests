import { Locator, Page } from "@playwright/test";    


/**
 * Page Object: Practice Form Page
 *
 * Purpose:
 * Encapsulates all elements and actions related to the form automation page.
 *
 * Design:
 * - Uses Test IDs for stable locators
 * - Groups inputs logically
 * - Provides reusable form interaction methods
 *
 * Why:
 * Keeping form logic in one place improves test readability and maintainability.
 */


export class PracticePage {
    
    readonly page: Page;  
    
    // ===== FORM INPUTS =====
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly dobInput: Locator;
    
    // ===== RADIO BUTTONS =====
    readonly genderFemaleRadio: Locator;
    readonly genderMaleRadio: Locator;
    readonly genderOtherRadio: Locator;
    
    // ===== OTHER INPUTS =====
    readonly countrySelect: Locator;
    readonly cityInput: Locator;
    readonly bioTextarea: Locator;

    // ===== CHECKBOXES =====
    readonly playwrightCheckbox: Locator;
    readonly seleniumCheckbox: Locator;
    readonly cypressCheckbox: Locator;

    // ===== PASSWORD =====
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly termsCheckbox: Locator;

    // ===== ACTIONS =====
    readonly submitButton: Locator;  
    
    constructor(page: Page) {
        this.page = page;
        // FORM INPUTS
        this.firstNameInput = page.getByTestId('input-first-name');
        this.lastNameInput = page.getByTestId('input-last-name');
        this.emailInput = page.getByTestId('input-email');
        this.phoneInput = page.getByTestId('input-phone');
        this.dobInput = page.getByTestId('input-dob');
        // ===== RADIO BUTTONS =====
        this.genderFemaleRadio = page.getByTestId('radio-gender-female');   
        this.genderMaleRadio = page.getByTestId('radio-gender-male');
        this.genderOtherRadio = page.getByTestId('radio-gender-other');
        // ===== OTHER INPUTS =====
        this.countrySelect = page.getByTestId('select-country');
        this.cityInput = page.getByTestId('input-city');
        this.bioTextarea = page.getByTestId('textarea-bio');
        // ===== CHECKBOXES =====
        this.playwrightCheckbox = page.getByTestId('checkbox-interest-playwright');
        this.seleniumCheckbox = page.getByTestId('checkbox-interest-selenium');
        this.cypressCheckbox = page.getByTestId('checkbox-interest-cypress');
        // ===== PASSWORD =====
        this.passwordInput = page.getByTestId('input-password');
        this.confirmPasswordInput = page.getByTestId('input-confirm-password');
        this.termsCheckbox = page.getByTestId('checkbox-terms');
        this.submitButton = page.getByTestId('submit-form-btn');

    }
    
    //Navigate to form page: Encapsulates navigation steps so tests don’t repeat them
    async formAutomationPractice(){
        await this.page.goto('https://qaplayground.com/');
        await this.page.getByRole('link', { name: 'Practice', exact: true }).click();
        await this.page.getByTestId('card-link-forms').click();
    }

    //Fill form with dynamic user data 
    async fillForm(user: any) {
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email);
        await this.phoneInput.fill(user.phone);
        await this.dobInput.fill(user.dateOfBirth);

        await this.genderFemaleRadio.check();

        // NOTE: Country is currently hardcoded → can be improved later
        await this.countrySelect.click();
        await this.page.getByRole('option', { name: 'USA' }).click();

        await this.cityInput.fill(user.city);
        await this.bioTextarea.fill(user.bio);

        await this.playwrightCheckbox.check();

        await this.passwordInput.fill(user.password);
        await this.confirmPasswordInput.fill(user.password);

        await this.termsCheckbox.check();
  }

  //Submit form
  async submit() {
    await this.submitButton.click();
  }

  //Success message locator: Used to validate form submission result
  successMessage() {
    return this.page.getByTestId('form-success-msg');
  }
}

