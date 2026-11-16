import {test, expect} from '@playwright/test';
test('TC09	Navigate to Products page', async({page})=>{
    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('testrs12stt@gmail.com');
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('AutomationExercise').nth(0)).toBeVisible();
  await page.getByRole('link',{name:'products'}).click();
  await expect(page.getByText('ALL PRODUCTS')).toBeVisible();
})

test('TC10-Verify all products are displayed', async({page})=>{
    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('testrs12stt@gmail.com');
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('AutomationExercise').nth(0)).toBeVisible();
  await page.getByRole('link',{name:'products'}).click();
  await expect(page.getByText('Blue Top').nth(0)).toBeVisible();
})

test('TC11-View a products details',async({page})=>{
    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('testrs12stt@gmail.com');
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('AutomationExercise').nth(0)).toBeVisible();
  await page.getByRole('link',{name:'products'}).click();
 await page.getByRole('link', {name:'View Product'}).nth(0).click();
//  await page.screenshot({path:'test-results/product.png'});
})

test('TC12-Search for a product', async({page})=>{
 await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('testrs12stt@gmail.com');
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('AutomationExercise').nth(0)).toBeVisible();
  await page.getByRole('link',{name:'products'}).click();
 await page.getByPlaceholder('Search Product').fill('Blue Top');
 await page.locator('#submit_search').click();
  await page.screenshot({path:'test-results/product.png'});
})
