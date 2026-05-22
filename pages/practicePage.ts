import { Page } from "@playwright/test";    

export class PracticePage {
    
    readonly page: Page;    
    
    constructor(page: Page) {
        this.page = page;
    }

    async formAutomationPractice(){
        await this.page.goto('https://qaplayground.com/');
        await this.page.getByRole('link', { name: 'Practice', exact: true }).click();
        await this.page.getByTestId('card-link-forms').click();
    }

    
async fillForm(user: any) {
    await this.page.getByTestId('input-first-name').fill(user.firstName);
    await this.page.getByTestId('input-last-name').fill(user.lastName);
    await this.page.getByTestId('input-email').fill(user.email);
    await this.page.getByTestId('input-phone').fill(user.phone);
    await this.page.getByTestId('input-dob').fill(user.dateOfBirth);

    await this.page.getByTestId('radio-gender-female').check();

    await this.page.getByTestId('select-country').click();
    await this.page.getByRole('option', { name: 'USA' }).click();

    await this.page.getByTestId('input-city').fill(user.city);
    await this.page.getByTestId('textarea-bio').fill(user.bio);

    await this.page.getByTestId('checkbox-interest-playwright').check();

    await this.page.getByTestId('input-password').fill(user.password);
    await this.page.getByTestId('input-confirm-password').fill(user.password);

    await this.page.getByTestId('checkbox-terms').check();
  }

  async submit() {
    await this.page.getByTestId('submit-form-btn').click();
  }

  successMessage() {
    return this.page.getByTestId('form-success-msg');
  }
}

