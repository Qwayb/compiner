<template>
  <div>
    <h2>Добро пожаловать!</h2>
    <button @click="logout">Выйти</button>
  </div>
</template>

<script>
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const logout = async () => {
      await signOut(auth);
      router.push("/login");
    };

    return { logout };
  }
};
</script>
