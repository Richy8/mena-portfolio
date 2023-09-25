import { createRouter, createWebHistory } from "vue-router";
import baseLayout from "@/layouts/base-layout";
import home from "@/pages/home";

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
        path: "/about",
        name: "About",
        component: () => import("@/pages/about"),
      },
      {
        path: "/blog",
        name: "Blog",
        component: () => import("@/pages/blog"),
      },
      {
        path: "/blog/:slug",
        name: "BlogDetail",
        component: () => import("@/pages/blog-detail"),
      },
      {
        path: "/projects",
        name: "Projects",
        component: () => import("@/pages/projects"),
      },
      {
        path: "/project/:slug",
        name: "ProjectDetail",
        component: () => import("@/pages/project-detail"),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("@/pages/contact"),
      },
      {
        path: "/schedule-session",
        name: "BookNow",
        component: () => import("@/pages/booknow"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // return new Promise((resolve) => {
    //   resolve({ left: 0, top: 0 });
    // });
    return { top: 0, left: 0 };
  },
});

export default router;
