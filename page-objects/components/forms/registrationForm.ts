import { type Locator, type Page } from '@playwright/test';

export class RegistrationForm {
    readonly page: Page;
    readonly nameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly repeatPasswordField: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#signupName');
        this.lastNameField = page.locator('#signupLastName');
        this.emailField = page.getByLabel('Name');
        this.passwordField = page.getByLabel('Password', { exact: true });
        this.repeatPasswordField = page.getByLabel('Re-enter password');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async fillAllFields(
        name: string,
        lastName: string,
        email: string,
        password: string,
        repeatPassword: string
    ) {
        await this.nameField.fill(name);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.repeatPasswordField.fill(repeatPassword);
    }

    async fillNameField(name: string) {
        await this.nameField.fill(name);
        await this.lastNameField.click();
        await this.page.waitForTimeout(1000);
    }

    async fillLastNameField(lastName: string) {
        await this.lastNameField.fill(lastName);
        await this.nameField.click();
        await this.page.waitForTimeout(1000);
    }

    async fillPasswordField(Password: string) {
        await this.passwordField.fill(Password);
        await this.lastNameField.click();
        await this.page.waitForTimeout(1000);
    }
}