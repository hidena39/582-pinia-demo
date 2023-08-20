<script setup>
import { useTodoListStore } from "../store/todoList.js";
import { storeToRefs } from "pinia";
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id">
    <div>{{ todo.item }}</div>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  setup() {
    const store = useTodoListStore();
    // storeToRefs lets todoList keep reactivity:
    const { todoList } = storeToRefs(store);

    return { todoList };
  },
};
</script>
