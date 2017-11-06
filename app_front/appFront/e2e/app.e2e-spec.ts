import { AppFrontPage } from './app.po';

describe('app-front App', () => {
  let page: AppFrontPage;

  beforeEach(() => {
    page = new AppFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
