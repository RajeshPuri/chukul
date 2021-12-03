const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("pages/Dashboard.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/sector",
        name: "Sector",
        component: () => import("pages/Sector.vue"),
        meta: {requiresAuth: true}
      }
    ],
  },
  {
    path: "/",
    component: () => import("layouts/BasicLayout.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("pages/Login.vue"),
      },
      {
        path: "/signup",
        name: "Signup",
        component: () => import("pages/Signup.vue"),
      },
      {
        path: "/reset",
        name: "Reset",
        component: () => import("pages/Reset.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
