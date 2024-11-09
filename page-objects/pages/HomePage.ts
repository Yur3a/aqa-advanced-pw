import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signUpButton: Locator;
    readonly signInButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.signInButton = page.locator('.header_signin');
    }

    async openRegistrationForm() {
        await this.signUpButton.click();
    }

    async open() {
        await this.page.goto('');
    }

    async openSignInForm() {
        await this.signInButton.click();
    }
}