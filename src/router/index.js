import Vue from "vue";
import Router from "vue-router";
import App from "../App.vue";
import Guestbook from "../organisms/Guestbook.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/unit-1",
    name: "Unit-1",
    component: Guestbook,
  },
  {
    path: "/unit-2",
    name: "Unit-2",
    component: Guestbook,
  },
  {
    path: "/unit-3",
    name: "Unit-3",
    component: Guestbook,
  },
]

const router = new Router({
  routes
});

export default router;