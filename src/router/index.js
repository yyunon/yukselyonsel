import {createRouter, createWebHistory} from "vue-router";
import MyHome from "../views/MyHome.vue";
import MyProjects from "../views/MyProjects.vue";
import MyBlog from "../views/MyBlog.vue";
import MyContact from "../views/MyContact.vue";
import MyCv from "../views/MyCv.vue";

const routes = [
    {
      path:"/",
      name: "MyHome",
      component: MyHome,
    },
    {
      path:"/projects",
      name: "MyProjects",
      component: MyProjects,
    },
    {
      path:"/blog",
      name: "MyBlog",
      component: MyBlog,
      children: [

      ]
    },
    {
      path:"/contact",
      name: "MyContact",
      component: MyContact,
    },
    {
      path:"/vc",
      name: "MyCv",
      component: MyCv,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
