import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/pages/HomePage';
import { RegistrationForm } from '../page-objects/components/forms/registrationForm'


test.describe('Sign up tests', () => {
  let homePage: HomePage;
  let registrationForm: RegistrationForm;
  test.beforeEach('Authorization', async ({ page }) => {
    homePage = new HomePage(page);
    registrationForm = new RegistrationForm(page);

    page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
    await homePage.openRegistrationForm();
  });

  test('Should register New user', async ({ page }) => {
    const uniqueEmail = `test+${Date.now()}@example.com`;
    await registrationForm.fillAllFields(
      'John',
      'Doe',
      uniqueEmail,
      'Password123!',
      'Password123!'
    );
    await registrationForm.registerButton.click();

    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');
    await expect(page.locator('text=You don’t have any cars in your garage'))
      .toBeVisible();
  });
});














