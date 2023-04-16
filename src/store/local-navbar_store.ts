import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLocalNavbarStore = defineStore("localNavbar", () => {
    const active = ref('')
    function setActive(newActive: any){
        active.value = newActive 
    }

    const project_items = [
        { name: "Все проекты" },
        { name: "Текущие проекты" },
        { name: "Завершенные проекты" }
    ]

    return {
        active,
        setActive,
        project_items
    }
})