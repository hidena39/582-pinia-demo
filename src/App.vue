<script setup>
import TodoApp from "./components/TodoApp.vue";
import { useCounterStore } from "./store/Counter.js";
</script>

<template>
  <TodoApp></TodoApp>
  <p>Double count is {{ useCounterStore().doubleCount }}</p>
  <p>Double Plus One count is {{ useCounterStore().doublePlusOne }}</p>
  <button @click="changeCount">Change Count to 2</button>
</template>

<script>
export default {
  name: "App",
  components: {
    TodoApp,
  },
  methods: {
    changeCount() {
      const counter = useCounterStore();
      counter.count = 2;
      return { counter };
    },
  },
};
</script>
