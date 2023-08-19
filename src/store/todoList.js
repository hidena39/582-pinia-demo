import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
  },
});
