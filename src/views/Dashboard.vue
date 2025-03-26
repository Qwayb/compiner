<template>
  <div>
    <h1>Добро пожаловать!</h1>
    <button @click="logout">Выйти</button>

    <h2>Добавить новую цель:</h2>
    <AddGoal />

    <h2>Твои цели:</h2>
    <p v-if="goals.length === 0">Нет целей</p>
    <ul>
      <li v-for="goal in goals" :key="goal.id">
        {{ goal.title }} — {{ goal.hoursSpent }} / {{ goal.hoursRequired }} часов
      </li>
    </ul>
  </div>
</template>

<script>
import { useGoalsStore } from "../stores/goals";
import { useRouter } from "vue-router";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { onMounted } from "vue";
import AddGoal from "../components/AddGoal.vue"; // Импортируем форму
export default {
  components: {
    AddGoal, // Регистрируем компонент
  },
  setup() {
    const router = useRouter();
    const store = useGoalsStore();

    const logout = async () => {
      await signOut(auth);
      router.push("/login");
    };

    onMounted(() => {
      store.fetchGoals();
    });

    return {
      logout,
      goals: store.goals,
    };
  },
};
</script>
