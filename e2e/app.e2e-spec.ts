import { Ng2CliAppB16Page } from './app.po';

describe('ng2-cli-app-b16 App', function() {
  let page: Ng2CliAppB16Page;

  beforeEach(() => {
    page = new Ng2CliAppB16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
