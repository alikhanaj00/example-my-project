const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardTitle = page.getByRole('heading', { name: /dashboard/i });
  }

  async verifyDashboardLoaded() {
    await expect(this.dashboardTitle).toBeVisible({ timeout: 15000 });
  }
}

module.exports = { DashboardPage };
