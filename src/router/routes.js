import auth from "./middlewares";
import guest from "./guest";

const routes = [
  // Auth Routes
  {
    path: "/",
    component: () => import("layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/homepage/Index")
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
