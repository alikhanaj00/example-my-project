const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { DashboardPage } = require('../Pages/Dashboard');

test.setTimeout(90000);

test('dashboard loads after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login('charlieandfriendsuae@gmail.com', 'TarekToby@000');
  await expect(page).toHaveURL(/merchant\/dashboard/, { timeout: 60000 });

  const dashboard = new DashboardPage(page);
  await dashboard.verifyDashboardLoaded();
});
