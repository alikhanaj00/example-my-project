class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.emailInput = page.getByRole('textbox', { name: 'Email Address Please Enter' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password Password is required' });
    this.togglePassword = page.locator('#togglePassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
  }

  async goto() {
    await this.page.goto('http://13.48.78.35/merchant/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.togglePassword.click();
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };