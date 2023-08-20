<script setup>
// import { useTodoListStore } from "../store/useTodoListStore";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>

<template>
  <TodoForm></TodoForm>
  <TodoList></TodoList>
</template>

<script>
export default {
  name: "TodoApp",
  components: {
    TodoForm,
    TodoList,
  },
};
</script>
