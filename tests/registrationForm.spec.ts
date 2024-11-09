import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/pages/HomePage';
import { RegistrationForm } from '../page-objects/components/forms/registrationForm'


test.describe('Registration form tests', () => {
    let homePage: HomePage;
    let registrationForm: RegistrationForm;
    test.beforeEach('open registration form', async ({ page }) => {
        homePage = new HomePage(page);
        registrationForm = new RegistrationForm(page);

        page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
        await homePage.openRegistrationForm();
    });

    test('Should show "Name is invalid" for wrong data', async ({ page }) => {
        await registrationForm.fillNameField('1234');

        const form = page.locator('form');
        await expect(form).toContainText('Name is invalid');
    });

    test('Should show "Name required"', async ({ page }) => {
        await registrationForm.fillNameField('');

        const form = page.locator('form');
        await expect(form).toContainText('Name required');
    });

    test('should show "Name has to be from 2 to 20 characters long" for wrong length, for short name', async ({ page }) => {
        await registrationForm.fillNameField('n');

        const form = page.locator('form');
        await expect(form).toContainText('Name has to be from 2 to 20 characters long');
    });

    test('should show "Name has to be from 2 to 20 characters long" for wrong length', async ({ page }) => {
        await registrationForm.fillNameField('LoremIpsumDolorSitAmet');

        const form = page.locator('form');
        await expect(form).toContainText('Name has to be from 2 to 20 characters long');
    });
test('Should show "Last name is invalid" for wrong data', async ({ page }) => {
    await registrationForm.fillLastNameField('1234');

    const form = page.locator('form');
    await expect(form).toContainText('Last name is invalid');
});

test('Should show "Last name required"', async ({ page }) => {
    await registrationForm.fillLastNameField('');

    const form = page.locator('form');
    await expect(form).toContainText('Last name required');
});

test('should show "Last name has to be from 2 to 20 characters long" for wrong length, for short name', async ({ page }) => {
    await registrationForm.fillLastNameField('n');

    const form = page.locator('form');
    await expect(form).toContainText('Last name has to be from 2 to 20 characters long');
});

test('should show "Last name has to be from 2 to 20 characters long" for wrong length', async ({ page }) => {
    await registrationForm.fillLastNameField('LoremIpsumDolorSitAmet');

    const form = page.locator('form');
    await expect(form).toContainText('Last name has to be from 2 to 20 characters long');
});

    test('should show "Email required" for empty email', async ({ page }) => {
        await registrationForm.emailField.click();
        await registrationForm.lastNameField.click();

        const form = page.locator('form');
        await expect(form).toContainText('Email required');
    });

    test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" for password field', async ({ page }) => {
        await registrationForm.fillPasswordField('1234567890');

        const form = page.locator('form');
        await expect(form).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    test('should show "Passwords do not match"', async ({ page }) => {
        const uniqueEmail = `test+${Date.now()}@example.com`;
        await registrationForm.fillAllFields(
          'John',
          'Doe',
          uniqueEmail,
          'Password123!',
          'Password123!!'
        );
        await page.click('input[name="lastName"]');

        const form = page.locator('form');
        await expect(form).toContainText('Passwords do not match');
    });
});












