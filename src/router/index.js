import Vue from "vue";
import Router from "vue-router";
import Home from "../organisms/Home.vue";
import Guestbook from "../organisms/Guestbook.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "App",
    component: Home,
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
  {
    path: "/guidebook",
    name: "Guidebook",
    component: Guestbook,
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new Router({
  routes,
  mode: 'history'
});

export default router;