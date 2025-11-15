import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import NotFound from "./components/NotFound.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/app",
      component: App,
    },
    {
      path: "/:notFound",
      component: NotFound,
    },
  ],
});

app.use(router);

app.use(createPinia());

app.mount("#app");
