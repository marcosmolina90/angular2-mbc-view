import { Angular2MbcPage } from './app.po';

describe('angular2-mbc App', () => {
  let page: Angular2MbcPage;

  beforeEach(() => {
    page = new Angular2MbcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
