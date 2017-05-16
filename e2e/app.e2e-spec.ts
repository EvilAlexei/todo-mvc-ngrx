import { TodoMvcNgrxPage } from './app.po';

describe('todo-mvc-ngrx App', () => {
  let page: TodoMvcNgrxPage;

  beforeEach(() => {
    page = new TodoMvcNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
