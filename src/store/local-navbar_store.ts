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
        { name: "Коробка" },
        { name: "Крыша" },
    ]
    const material_items =[
        { name: "Общая информация" },
        { name: "Проекты" },
        { name: "История закупок" }
    ]
    const estimate_items = [
        { name: "Фундамент" },
        { name: "Коробка" },
        { name: "Крыша" },
    ]
    return {
        active,
        projects_items,
        buildings_items,
        material_items,
        estimate_items,
        setActive
    }
})