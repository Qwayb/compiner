import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // если main.js в src
import { auth } from "../firebase"; // Импорт Firebase Auth

const app = createApp(App);
app.use(router);

router.beforeEach((to, from, next) => {
    const user = auth.currentUser;
    if (to.meta.requiresAuth && !user) {
        next("/login");
    } else {
        next();
    }
});

app.mount("#app");
