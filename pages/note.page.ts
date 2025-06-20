import { Page } from '@playwright/test';

export class TodoMvcPage {
  readonly page: Page;
  readonly inputSelector = '.new-todo';
  readonly todoListSelector = '.todo-list li';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(todo: string) {
    await this.page.fill(this.inputSelector, todo);
    await this.page.press(this.inputSelector, 'Enter');
  }

  async getTodoItems() {
    return this.page.locator(this.todoListSelector);
  }

  async getLastTodoText() {
    const items = await this.getTodoItems();
    return items.last().locator('label');
  }
}
