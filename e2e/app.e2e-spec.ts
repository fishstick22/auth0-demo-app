import { Auth0DemoAppPage } from './app.po';

describe('auth0-demo-app App', () => {
  let page: Auth0DemoAppPage;

  beforeEach(() => {
    page = new Auth0DemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
