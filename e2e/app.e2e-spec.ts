import { Ng2JointjsPage } from './app.po';

describe('ng2-jointjs App', function() {
  let page: Ng2JointjsPage;

  beforeEach(() => {
    page = new Ng2JointjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(' works!');
  });
});
