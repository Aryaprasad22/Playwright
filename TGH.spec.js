import { test, expect } from '@playwright/test';

test('Login Test-TGH Testing', async ({ page }) => {
  await page.goto('https://architect-testing.projectsmate.com/login');
  await page.locator('input[name="email"]').fill('aryabeinex@gmail.com');
  await page.locator('input[name="password"]').fill('Test@12345');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/dashboard|home/);

});
test('Signup Test - TGH Testing', async ({ page }) => {
  await page.goto('https://architect-testing.projectsmate.com/login');
  await page.getByRole('link', { name: /sign up|register/i }).click();
  await page.locator('input[name="name"]').fill('Test User');
  await page.locator('input[name="email"]').fill('testuser123@mail.com');
  await page.locator('input[name="password"]').fill('Password@123');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/login|dashboard/);
});