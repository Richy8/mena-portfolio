import { createRouter, createWebHistory } from "vue-router";
import baseLayout from "@/layouts/base-layout";
import home from "@/pages/home-page";

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
        path: "/project/:slug",
        name: "ProjectDetail",
        component: () => import("@/pages/project-detail"),
      },
      {
        path: "/schedule-session",
        name: "BookNow",
        component: () => import("@/pages/booknow-page"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0, left: 0 };
  },
});

export default router;
