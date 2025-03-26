<template>
  <div class="auth-container">
    <h2>Вход</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Пароль" />
    <button @click="login">Войти</button>
    <p>Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></p>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push("/dashboard");
      } catch (error) {
        alert(error.message);
      }
    };

    return { email, password, login };
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 300px;
  margin: auto;
  text-align: center;
}
</style>
