import { browser, by, element } from 'protractor';

export class Angular2DiscoveryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('MaS-root h1')).getText();
  }
}
