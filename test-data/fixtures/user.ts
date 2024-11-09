import { Page } from '@playwright/test';

export const User = {
  username: 'yurii_z@outlook.com',
  password: '123QWEasd',
};

export async function loginUser(page: Page) {
  await page.goto('https://qauto.forstudy.space');
  await page.click('text=Sign In');
  await page.fill('#signinEmail', User.username);
  await page.fill('#signinPassword', User.password);
  await page.click('text=Login');
}
