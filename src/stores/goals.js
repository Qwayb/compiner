import { defineStore } from "pinia";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const useGoalsStore = defineStore("goals", {
    state: () => ({
        goals: []
    }),
    actions: {
        async fetchGoals() {
            const querySnapshot = await getDocs(collection(db, "goals"));
            this.goals = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        },
        async addGoal(goal) {
            const docRef = await addDoc(collection(db, "goals"), goal);
            this.goals.push({ id: docRef.id, ...goal });
        }
    }
});
