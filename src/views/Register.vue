<template>
  <div class="auth-container">
    <h2>Регистрация</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Пароль" />
    <button @click="register">Зарегистрироваться</button>
    <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const register = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push("/dashboard");
      } catch (error) {
        alert(error.message);
      }
    };

    return { email, password, register };
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
