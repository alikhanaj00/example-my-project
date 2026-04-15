const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://13.48.78.35/merchant/login');
  console.log('URL at start:', page.url());
  console.log('BUTTONS:', await page.$$eval('button', buttons => buttons.map(b => ({ text: b.textContent.trim(), type: b.type, disabled: b.disabled }))));
  console.log('INPUTS:', await page.$$eval('input', inputs => inputs.map(i => ({ type: i.type, name: i.name, placeholder: i.placeholder, value: i.value, id: i.id }))));
  await page.getByRole('textbox', { name: 'Email Address Please Enter' }).fill('charlieandfriendsuae@gmail.com');
  await page.getByRole('textbox', { name: 'Password Password is required' }).fill('TarekToby@000');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null),
    page.getByRole('button', { name: 'Log in' }).click(),
  ]);
  const urlAfter = page.url();
  console.log('URL after click:', urlAfter);
  const errors = await page.$$eval('.text-danger, .alert, .error, .error-message, .invalid-feedback, .invalid-feedback div', els => els.map(e => e.textContent.trim()).filter(Boolean));
  console.log('ERROR MESSAGES:', errors);
  const loginStatus = await page.evaluate(() => ({ title: document.title, heading: document.querySelector('h1')?.textContent, bodyText: document.body.innerText.slice(0, 500) }));
  console.log('PAGE STATE:', loginStatus);
  await browser.close();
})();