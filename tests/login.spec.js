import { test, expect } from '@playwright/test';

test ('TC01 - Verify homepage is displayed', async({page})=>{
   await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
  await expect(page.getByText('AutomationExercise').nth(0)).toBeVisible();
});

test('TC02 - Verify navigation to Signup/Login page', async({page})=>{
    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
   await expect(page.getByText('Login to your account')).toBeVisible();
});

// test('TC03	Register a new user with valid details', async({page})=>{
//    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
//    await page.locator('a[href="/login"]').click();
//    await page.getByPlaceholder('Name').fill('test');
//    await page.getByPlaceholder('Email Address').nth(1).fill('testrs12stt@gmail.com');
//    await page.getByRole('button',{name:'Signup'}).click();
//    await page.getByLabel('Mr.').check();
//    await page.locator('#password').fill('Welcome@123');
//     await page.locator('#days').selectOption('15');
//     await page.locator('#months').selectOption('5');
//     await page.locator('#years').selectOption('1998');
//     await page.locator('#first_name').fill('Mohan');
//     await page.locator('#last_name').fill('Kumar');
//     await page.locator('#company').fill('ABC Technologies');
//     await page.locator('#address1').fill('Hyderabad');
//     await page.locator('#country').selectOption({ label: 'India' });
//     await page.locator('#state').fill('Telangana');
//     await page.locator('#city').fill('Hyderabad');
//     await page.locator('#zipcode').fill('500001');
//     await page.locator('#mobile_number').fill('9876543210');
//     await page.locator('[data-qa="create-account"]').click();
//     await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
//       await page.screenshot({path: 'test-results/account-created.png'});
// });

test('TC04 -Register with an already registered email', async({page})=>{
  await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
    await page.locator('a[href="/login"]').click();
    await page.getByPlaceholder('Name').fill('testing');
   await page.getByPlaceholder('Email Address').nth(1).fill('test@gmail.com');
   await page.getByRole('button',{name:'Signup'}).click();
   await expect(page.getByText('Email Address already exist!')).toBeVisible();
});

test('TC05 - Login with valid credentials', async({page})=>{
    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('testrs12stt@gmail.com');
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('AutomationExercise').nth(0)).toBeVisible();
})

test('TC06	Login with invalid credentials', async({page})=>{
    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('test@gmail.com');
  await page.getByPlaceholder('Password').fill('123');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
})

test('TC07	Login with empty username and password', async({page})=>{
 await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('');
  await page.getByPlaceholder('Password').fill('');
  await page.getByRole('button',{name:'Login'}).click();
})

test('TC08-Logout successfully',async({page})=>{
    await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
   await page.locator('a[href="/login"]').click();
  await page.getByPlaceholder('Email Address').nth(0).fill('testrs12stt@gmail.com');
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('AutomationExercise').nth(0)).toBeVisible();
  await page.locator('a[href="/logout"]').click();
  await expect(page.getByText('Login to your account')).toBeVisible();
})
