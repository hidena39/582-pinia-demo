import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
//in above order
import useCounterStore from "./store/Counter.js";
import useTodoListStore from "./store/todoList.js";

createApp(App)
  .use(createPinia())
  .use(useCounterStore)
  .use(useTodoListStore)
  .mount("#app");
