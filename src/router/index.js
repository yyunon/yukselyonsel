import {createRouter, createWebHashHistory} from "vue-router";
import MyHome from "../views/MyHome.vue";
import MyProjects from "../views/MyProjects.vue";
import MyBlog from "../views/MyBlog.vue";
import MyContact from "../views/MyContact.vue";
import MyContent from "../components/MyContent.vue";
import MyCv from "../views/MyCv.vue";

const routes = [
    {
      path:"/",
      name: "welcome",
      component: MyHome,
    },
    {
      path:"/home",
      name: "home",
      component: MyHome,
    },
    {
      path:"/projects",
      name: "projects",
      component: MyProjects,
    },
    {
      path:"/blog",
      name: "blog",
      component: MyBlog,
      children: [
      ]
    },
    {
      path:"/blog/view",
      name: "blogView",
      component: MyContent,
    },
    {
      path:"/contact",
      name: "contactme",
      component: MyContact,
    },
    {
      path:"/vc",
      name: "cv",
      component: MyCv,
    },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({top: 0}), 300)
    })
  }
});

export default router;
