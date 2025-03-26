<template>
  <form @submit.prevent="submitGoal">
    <input v-model="title" placeholder="Название цели" required />
    <input type="number" v-model.number="hoursRequired" />
    <input v-model="deadline" type="date" required />
    <button type="submit">Добавить цель</button>
  </form>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();

import { ref } from "vue";
import { useGoalsStore } from "../stores/goals";

export default {
  setup() {
    const store = useGoalsStore();
    const title = ref("");
    const hoursRequired = ref(0);
    const deadline = ref("");

    const submitGoal = async () => {
      console.log("Форма отправлена");
      console.log("Данные:", { title: title.value, hoursRequired: hoursRequired.value, deadline: deadline.value });

      if (!title.value || hoursRequired.value <= 0 || !deadline.value) return;

      await store.addGoal({
        title: title.value,
        hoursRequired: hoursRequired.value,
        deadline: deadline.value,
        hoursSpent: 0,
        participants: [auth.currentUser.uid], // Добавляем ID пользователя
      });

      title.value = "";
      hoursRequired.value = 0;
      deadline.value = "";
    };

    return {title, hoursRequired, deadline, submitGoal};
  }
};
</script>
