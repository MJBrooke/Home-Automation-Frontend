import { HomeAutomationFrontendPage } from './app.po';

describe('home-automation-frontend App', () => {
  let page: HomeAutomationFrontendPage;

  beforeEach(() => {
    page = new HomeAutomationFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
