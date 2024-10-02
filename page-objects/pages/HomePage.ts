import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    }

    async openRegistrationForm() {
        await this.signUpButton.click();
    }
}