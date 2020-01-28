/**
 * To set up a debugger 
 * 
 * https://github.com/microsoft/vscode-recipes/tree/master/Angular-CLI#debug-end-to-end-tests
 */

import { browser, logging, element, by } from 'protractor';
import { fillMaterialField } from './utils';

describe('workspace-project App', () => {

  beforeEach(() => {
  });

  it('should display a sign up form on the landing page', async () => {
    await browser.get(browser.baseUrl);
    const form = element(by.css('.form-signup'));
    expect(form.isPresent()).toBe(true);
  });

  it('should arrive to the user dashboard after sign up', async () => {
    await browser.get(browser.baseUrl);
    const name = "Mikko Ohtamaa";
    
    await fillMaterialField("password", "supersecret");
    await fillMaterialField("email", "example@example.com"); // https://en.wikipedia.org/wiki/Example.com
    await fillMaterialField("name", name)
    await element(by.css('.form-signup button')).click();
    expect(element(by.css('.span-user-full-name')).getText()).toBe(name);
  });  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
