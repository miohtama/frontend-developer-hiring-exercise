/**
 * To set up a debugger 
 * 
 * https://github.com/microsoft/vscode-recipes/tree/master/Angular-CLI#debug-end-to-end-tests
 */

import { browser, logging, element, by } from 'protractor';
import { fillField } from './utils';

describe('workspace-project App', () => {

  beforeEach(() => {
  });

  it('should display a sign up form', async () => {
    await browser.get(browser.baseUrl);
    const form = element(by.css('.form-signup'));
    expect(form.isPresent());
  });

  it('should arrive to the user dashboard after sign up', async () => {
    await browser.get(browser.baseUrl);
    await fill
  });  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
