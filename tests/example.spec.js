const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  
  await loginPage.login('charlieandfriendsuae@gmail.com', 'TarekToby@000');

  
  await page.waitForTimeout(15000);
  // Assertion (basic check)
  // await expect(page).not.toHaveURL(/login/);
});