import {createRouter, createWebHistory} from "vue-router";
import MyHome from "../views/MyHome.vue";

const routes = [
  {
    path:"/",
    name: "Home",
    component: MyHome,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
