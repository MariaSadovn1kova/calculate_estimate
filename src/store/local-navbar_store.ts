import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLocalNavbarStore = defineStore("localNavbar", () => {
    const active = ref('')
    function setActive(newActive: any){
        active.value = newActive 
    }

    const projects_items = [
        { name: "Все проекты" },
        { name: "Текущие проекты" },
        { name: "Завершенные проекты" }
    ]
    const buildings_items =[
        { name: "Общая информация" },
        { name: "Фундамент" },
        { name: "Стены" },
        { name: "Перекрытие" },
        { name: "Крыша" },
    ]

    return {
        active,
        projects_items,
        buildings_items,
        setActive
    }
})