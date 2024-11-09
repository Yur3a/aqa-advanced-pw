import { test as base, expect, Page } from '@playwright/test';
import { User, loginUser } from './user';

type TestFixtures = {
  userGaragePage: Page;
};

const test = base.extend<TestFixtures>({
  userGaragePage: async ({ page }, use) => {
    await loginUser(page);
    await page.context().storageState({ path: 'storageState.json' });

    await page.context().addCookies([{ name: 'state', value: 'loggedIn', domain: 'your-domain.com' }]);
    await page.goto('https://qauto.forstudy.space/panel/garage');
    await use(page);
  },
});

export { test, expect };
