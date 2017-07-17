import { Angular2DiscoveryPage } from './app.po';

describe('angular2-discovery App', () => {
  let page: Angular2DiscoveryPage;

  beforeEach(() => {
    page = new Angular2DiscoveryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to MaS!');
  });
});
