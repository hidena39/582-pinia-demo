<script setup>
import { useTodoListStore } from "../store/todoList.js";
</script>

<template>
  <div>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a new todo"
    />
    <button @click="addTodo">Add Todo</button>

    <ul>
      <li v-for="(todo, index) in todoListStore.todos" :key="index">
        {{ todo.text }}
      </li>
    </ul>

    <p>Done Todos: {{ todoListStore.doneTodos.length }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  setup() {
    const todoListStore = useTodoListStore();
    const newTodo = ""; // Input field value
    console.log(todoListStore);
    console.log(newTodo);
  },
};
</script>
