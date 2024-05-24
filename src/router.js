import { createRouter, createWebHistory } from "vue-router";
import Home from "./View/Home.vue";
import Categories from "./View/Categories.vue";
import ProductDetails from "./components/ProductDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/product",
    name: "ProductDetails",
    component: ProductDetails,
    // props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
