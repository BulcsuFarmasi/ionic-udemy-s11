import { AngularRecapPage } from './app.po';

describe('angular-recap App', function() {
  let page: AngularRecapPage;

  beforeEach(() => {
    page = new AngularRecapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
