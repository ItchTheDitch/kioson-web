import { KiosonWebPage } from './app.po';

describe('kioson-web App', () => {
  let page: KiosonWebPage;

  beforeEach(() => {
    page = new KiosonWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
