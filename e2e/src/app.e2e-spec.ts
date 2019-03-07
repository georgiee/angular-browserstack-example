import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display News as the headline', () => {
    browser.waitForAngularEnabled(false);

    page.navigateTo();
    expect(page.getTitleText()).toContain('News');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});

// describe('BrowserStack Local Testing', function() {
//   it('can check tunnel working', function() {
//     browser.driver.get('http://bs-local.com:45691/check').then(function() {
//       expect(browser.driver.getPageSource()).toMatch(/Up and running/i);
//     });
//   });
// });
