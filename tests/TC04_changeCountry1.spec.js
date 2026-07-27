const { test, expect } = require('@playwright/test');

test('@sanity @all TC04_changeCountry1', async ({ page, context }) => {

  await page.goto('https://www.amazon.com/');

  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();

  await page.getByRole('textbox', { name: 'Enter mobile number or email' })
    .fill('shaladong53@gmail.com');

  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Test123$');

  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  await expect(page.getByRole('link', { name: 'Hello, Playwrightshal Account' })).toBeVisible();

  await expect(
    page.getByRole('link', {
      name: 'Choose a language for shopping in Amazon United States. The current selection'
    })
  ).toBeVisible();

  await page.getByRole('link', {
    name: 'Choose a language for shopping in Amazon United States. The current selection'
  }).hover();
  await page.getByRole('navigation', { name: 'Primary' }).getByLabel('Expand to Change Language or').click();

  await page.getByRole('link', { name: 'Change country/region.' }).click();

  await page.locator('.a-button-text.a-declarative').click();

  await page.getByText('India').nth(1).click();

  // Capture the new page before clicking
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Go to website' }).click()
  ]);

  await newPage.waitForLoadState();

  console.log("URL :", newPage.url());
  console.log("Title :", await newPage.title());

  await expect(newPage).toHaveURL(/amazon\.in/);

  await expect(
    newPage.getByRole('button', { name: 'Continue shopping' })
  ).toBeVisible();

  await newPage.getByRole('button', { name: 'Continue shopping' }).click();

  await expect(
    newPage.getByRole('link', {
      name: 'Choose a language for shopping in Amazon India'
    })
  ).toBeVisible();

  console.log("Final URL :", newPage.url());
  console.log("Final Title :", await newPage.title());

});
