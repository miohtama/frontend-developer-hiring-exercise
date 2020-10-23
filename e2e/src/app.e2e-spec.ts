import { browser, logging, element, by } from 'protractor';
import { User } from 'src/app/models';

describe('workspace-project App', () => {

  beforeEach(() => {

  });

  it('should display a sign up form on the landing page', async () => {

    await browser.get(browser.baseUrl);
    const form = element(by.css('.form-signup'));
    expect(form.isPresent()).toBe(true);

  });

  it('Should navigate to the user dashboard after sign up', async () => {

    // check '/sign-up' url.
    let url: string = await browser.getCurrentUrl();
    expect(url).toEqual('http://localhost:4200/sign-up');

    // test values
    let code_test: number = 34;
    let name_test: string = 'Yair';
    let email_test: string = 'example@example.com';
    let phone_test: number = 37283632;
    let pw_test: string = 'asdasd123';
    let confirm_pw_test: string = 'asdasd123';

    // set inputs
    await element(by.id('input_country_code')).sendKeys(code_test);
    await element(by.id('input_pw')).sendKeys(pw_test);
    await element(by.id('input_confirm_pw')).sendKeys(confirm_pw_test);
    await element(by.id('input_name')).sendKeys(name_test);
    await element(by.id('input_email')).sendKeys(email_test);
    await element(by.id('input_phone')).sendKeys(phone_test);

    // check if click submit is enabled. Checking every input validators to enable the button. 
    let habilitado: boolean = await element(by.buttonText('Sign up')).isEnabled();
    expect(habilitado).toBe(true);

    // click on submit button
    await element(by.buttonText('Sign up')).click();

    // sent to /home and check it.  
    let url_home: string = await browser.getCurrentUrl();
    expect(url_home).toEqual('http://localhost:4200/home');

    // get localstorage & currentUser item.
    let user: User = JSON.parse(await browser.executeScript("return window.localStorage.getItem('currentUser');"));

    // check phone number format
    expect(user.phoneNumber).toEqual(`+${code_test}${phone_test}`);

  });

  afterEach(async () => {

    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));

  });

});