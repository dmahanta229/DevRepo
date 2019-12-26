import { AngularCartPage } from './app.po';

describe('angular-cart App', () => {
  let page: AngularCartPage;

  beforeEach(() => {
    page = new AngularCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
