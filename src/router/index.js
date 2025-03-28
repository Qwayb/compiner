import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
