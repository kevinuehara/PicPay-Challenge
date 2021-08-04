import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getWelcomeText()).toEqual('Bem vindo!');
  });

  it('should display title page header', () => {
    expect(page.getPageTitleText()).toEqual('PicPay Desafio Frontend');
  });

  it('should contains 33 users', () => {
    const users = page.countAvailableUsers();
    expect(users.count()).toBe(33);
  });

  it('should pay some user', () => {
    const buttonFirstUser = page.getButtonPaymentFirstUser();
    const inputValue = page.getPaymentValueInput();
    const button = page.getPaymentButton();
    const errorMessage = page.getPaymentSuccessMessage();
    buttonFirstUser.click();
    inputValue.sendKeys('100');
    button.click();
    expect(errorMessage.getText()).toEqual('O pagamento foi concluido com sucesso.');
  });

  it('should throw error on payment', () => {
    const buttonFirstUser = page.getButtonPaymentFirstUser();
    const inputValue = page.getPaymentValueInput();
    const button = page.getPaymentButton();
    const selectorCards = page.getSelectorOfCards();
    const cardWithError = page.getCardWithError();
    const successMessage = page.getPaymentSuccessMessage();

    buttonFirstUser.click();
    inputValue.sendKeys('100');
    selectorCards.click();
    cardWithError.click();
    button.click();
    expect(successMessage.getText()).toEqual('O pagamento não foi concluido com sucesso.');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
