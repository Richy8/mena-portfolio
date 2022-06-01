import { createRouter, createWebHistory } from "vue-router";
import baseLayout from "@/layouts/base-layout";
import home from "@/pages/home";
import portfolio from "@/pages/portfolio";
import contact from "@/pages/contact";

const routes = [
  {
    path: "/",
    alias: "/home",
    component: baseLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: home,
      },
      {
        path: "/portfolio",
        name: "Portfolio",
        component: portfolio,
      },
      {
        path: "/contact",
        name: "Contact",
        component: contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
