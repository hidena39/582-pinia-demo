<template>
  <form @submit.prevent="addItemAndClear(todo)">
    <input v-model="todo" type="text" /><button>Add</button>
  </form>
</template>

<script setup>
import { useTodoListStore } from "../store/todoList.js";
import { ref } from "vue";
</script>

<script>
export default {
  name: "TodoForm",

  setup() {
    const todo = ref("");
    const store = useTodoListStore();

    return { todo };
  },

  methods: {
    addItemAndClear(item) {
      if (item.length === 0) {
        return;
      }
      // Invokes the function in the store:
      this.$store.addTodo(item);
      this.todo = "";
    },
  },
};
</script>
