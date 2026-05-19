import { test, expect, request } from '@playwright/test';
import tags from '../test-data/tags.json';  


test.beforeEach( async ({ page }) => {
   //mock the tags: it will return "automation, playwright, qa" which is in the file test-data/tags.json
    await page.route('*/**/api/tags', async route => {
      await route.fulfill({
        body: JSON.stringify(tags)
    })
  })

    await page.goto('https://conduit.bondaracademy.com/')
})




    //mock the articles: it will return the articles from the API
//await page.route('**/api/articles*', async route => {
//  const mockResponse = {
//    articles: [
 //     {
//        title: "This is MOCK test for playwright API",
 //       description: "The description of the article for MOCK test",
        // Add other required fields as needed (e.g., slug, author, etc.)
 //     }
//    ],
//    articlesCount: 1
//  };
    
//    await route.fulfill({
//      body: JSON.stringify(mockResponse)
 //   })
 // })



 //------------******__________________________
  // Go to the starting url before each test.
  //This condition is for the test to Mock the tags which is here /test-data/tags.json
  //await page.goto('https://conduit.bondaracademy.com/', {waitUntil: 'networkidle'})
  
  //------------******__________________________
  
  //This condition is to Login to the site, now it's in .auth file
  //await page.goto('https://conduit.bondaracademy.com/')
 // await page.getByText('Sign in').click()
  //await page.getByRole('textbox', { name: 'Email' }).fill('julian_jr@ukr.net')
  //await page.getByRole('textbox', { name: 'Password' }).fill('!Qq123456')
  //await page.getByRole('button', { name: 'Sign in' }).click()


test('Check text conduit', async ({ page }) => {

  //mock the articles: it will return the articles from the API
 await page.route('*/**/api/articles*', async route => {
    const response = await route.fetch()
    const responseBody =  await response.json()
    responseBody.articles[0].title = "This is MOCK test for playwright API"
    responseBody.articles[0].description = "The description of the article for MOCK test"
    
    await route.fulfill({
      body: JSON.stringify(responseBody)
    })
  })

  // Expect a title "to contain" a substring.
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
  await expect(page.locator('app-article-list h1').first()).toContainText('This is MOCK test for playwright API');
  await expect(page.locator('app-article-list p').first()).toContainText('The description of the article for MOCK test');

  });

test('delete article with UI and create with API', async ({page, request }) => {  

 //Now it's in the .auth file and in the config file
    //  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    //   data: {
    //     "user":
    //     {"email":"julian_jr@ukr.net",
    //       "password":"!Qq123456"
    //     }
    //     }
    //   })
  
      // const responseBody = await response.json()
      // const accessToken = responseBody.user.token

      const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data: {
          "article": {
            "title": "This is the NEW MOCK test for playwright API",
            "description": "The description of the article for MOCK test",
            "body": "The body of the article for MOCK test"
          }
        }
      //   },
      //   headers: {
      //     Authorization: `Token ${accessToken}`
      //   }
      
      })
      expect(articleResponse.status()).toEqual(201)
      
     await page.getByText('Global Feed').click()  
     await page.getByText('This is the NEW MOCK test for playwright API').click()
     await page.getByRole('button', { name: 'Delete Article' }).first().click()
     await page.getByText('This is the NEW MOCK test for playwright API').click()
     

     await expect(page.locator('app-article-list h1').first()).not.toContainText('This is the NEW MOCK test for playwright API');
    });

test('delete article with API and create with UI', async ({page, request}) => {  
      await page.getByText('New Article').click()
      await page.getByRole('textbox', { name: 'Article Title' }).fill('This is a new mock test to create an article with UI')
      await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('The description of the article for MOCK test')
      await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill('The body of the article for MOCK test')
      await page.getByRole('button', { name: 'Publish Article' }).click()

      const articleResponse = await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles/')
      const articleResponseBody = await articleResponse.json()
      const slugId = articleResponseBody.article.slug
      
      await expect(page.locator('app-article-page h1').first()).toContainText('This is a new mock test to create an article with UI');

      await page.getByText('Home').click()
      await page.getByText('Global Feed').click()

      await expect(page.locator('app-article-list h1').first()).toContainText('This is a new mock test to create an article with UI');

  //Now it's in the .auth file and in the config file
      // const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
      // data: {
      //   "user":
      //   {"email":"julian_jr@ukr.net",
      //     "password":"!Qq123456"
      //   }
      //   }
      // })
      // const responseBody = await response.json()
      // const accessToken = responseBody.user.token

      // const deleteArticleResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`, {
      //   headers: {
      //     Authorization: `Token ${accessToken}`
      //   }
      const deleteArticleResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`)

      expect(deleteArticleResponse.status()).toEqual(204)
    });    