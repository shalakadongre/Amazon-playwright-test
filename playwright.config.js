// @ts-check
import { defineConfig, devices } from '@playwright/test';


const Config= ({
  testDir: './tests',
  retries: 1,
  timeout: 70000,
  expect : {
    timeout: 40000
  },
  reporter: 'html',

  projects: [

    {
      name :'chrome',
        use: {
        BrowserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
    video: 'only-on-failure',
    trace : 'retain-on-failure',
        }    
  },
   {
    name :'firefox',
      use: {
      BrowserName: 'firefox',
      headless: false,
      screenshot: 'only-on-failure',
      video: 'only-on-failure',
      trace : 'retain-on-failure',
  }
},
{
 name :'edge',
    use: {
    BrowserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'only-on-failure',
    trace : 'retain-on-failure',
  }},
  {
   name :'safari',
    use: {
    BrowserName: 'webkit',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'only-on-failure',
    trace : 'retain-on-failure',
  }
} 

]
  
});
module.exports = Config;
