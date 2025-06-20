import { test, expect } from '@playwright/test';
import { TodoMvcPage } from '../pages/note.page';
import { sampleText } from '../utils/test-data';

test.describe('Demo tests', () => {
    test('should add a new todo item', async ({ page }) => {
        const todoPage = new TodoMvcPage(page);
        await todoPage.goto();
        await todoPage.addTodo(sampleText);
        await expect(await todoPage.getLastTodoText()).toHaveText(sampleText);
    });
});
