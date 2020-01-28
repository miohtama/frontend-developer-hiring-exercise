import { browser, logging, element, by } from 'protractor';

// https://stackoverflow.com/questions/50970567/more-efficient-way-to-fill-out-my-form-in-protractor/50970938
export async function fillInput(el, text) {
    await el.click()
    await el.clear();
    await el.sendKeys(text);
}

/**
 * Fills a named field on a form.
 */
export async function fillField(name, text) {
    const el = element(by.css(`input[name='{name}']`));
    expect(el.isPresent());
    fillInput(el, text);
}