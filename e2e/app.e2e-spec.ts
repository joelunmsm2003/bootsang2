import { CapitalPage } from './app.po';

describe('capital App', () => {
  let page: CapitalPage;

  beforeEach(() => {
    page = new CapitalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
