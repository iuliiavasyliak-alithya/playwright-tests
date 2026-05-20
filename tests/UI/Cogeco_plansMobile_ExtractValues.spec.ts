import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
        await page.goto('https://www.cogeco.ca/en/mobile/plans')
    });

//Scenarios to extract values of price for all 3 plans and validate them with expected values
test('Check price of Talk & text plan', async ({ page }) => {

  const expectedPrice = '$10.00/mo.';

  const currency = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[2]/span[@class="currency en"]');
  const integer = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[2]/span[@class="integer"]');
  const decimal = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[2]/span[@class="decimal"]');
  const period = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[2]/span[@class="period"]');
  
 
//  extract values
  const currencyText = await currency.innerText();
  const integerText = await integer.innerText();
  const decimalText = await decimal.innerText();
  const periodText = await period.innerText();

  //  build final value
  const actualPrice = `${currencyText}${integerText}${decimalText}${periodText}`;

  console.log(actualPrice);

  //  validation
  expect(actualPrice).toBe(expectedPrice);
});

test('Check price of Rollover data 10 GB plan', async ({ page }) => {

  const expectedPrice = '$20.00/mo.';

  const currency = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[4]/span[@class="currency en"]');
  const integer = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[4]/span[@class="integer"]');
  const decimal = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[4]/span[@class="decimal"]');
  const period = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[4]/span[@class="period"]');
  
 
//  extract values
  const currencyText = await currency.innerText();
  const integerText = await integer.innerText();
  const decimalText = await decimal.innerText();
  const periodText = await period.innerText();

  //  build final value
  const actualPrice = `${currencyText}${integerText}${decimalText}${periodText}`;

  console.log(actualPrice);

  //  validation
  expect(actualPrice).toBe(expectedPrice);
});

test('Check price of Rollover data 25 GB plan', async ({ page }) => {

  const expectedPrice = '$30.00/mo.';

  const currency = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[6]/span[@class="currency en"]');
  const integer = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[6]/span[@class="integer"]');
  const decimal = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[6]/span[@class="decimal"]');
  const period = page.locator('(//div[contains(@class,"Card_matchBorderColor")]//span[@class="price"])[6]/span[@class="period"]');
  
 
//  extract values
  const currencyText = await currency.innerText();
  const integerText = await integer.innerText();
  const decimalText = await decimal.innerText();
  const periodText = await period.innerText();

  //  build final value
  const actualPrice = `${currencyText}${integerText}${decimalText}${periodText}`;

  console.log(actualPrice);

  //  validation
  expect(actualPrice).toBe(expectedPrice);
});
