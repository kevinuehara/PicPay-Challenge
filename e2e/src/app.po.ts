import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getWelcomeText() {
    return element(by.id('welcome-message')).getText() as Promise<string>;
  }

  getPageTitleText() {
    return element(by.css('.header-title')).getText() as Promise<string>;
  }

  countAvailableUsers() {
    return element.all(by.css('app-user-info'));
  }

  getButtonPaymentFirstUser() {
    return element.all(by.css('app-user-info app-button button')).first();
  }

  getPaymentValueInput() {
    return element.all(by.css('app-modal-payment .input-value input'));
  }

  getPaymentButton() {
    return element(by.css('app-modal-payment .pay-button app-button button'));
  }

  getPaymentSuccessMessage() {
    return element(by.css('app-modal-receipt-payment .content span'));
  }

  getSelectorOfCards() {
    return element(by.css('app-modal-payment .input-value select'));
  }

  getCardWithError() {
    return element.all(by.css('app-modal-payment .input-value select option')).get(1);
  }
}
