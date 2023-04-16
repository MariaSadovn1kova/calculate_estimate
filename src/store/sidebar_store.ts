import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
    const project_items = [
        { name: "2023" },
        { name: "2022" },
        { name: "2021" }
    ]
    const materials_items =[
        { name: "Фундамент" },
        { name: "Коробка" },
        { name: "Крыша" }
    ]

    const active = ref(project_items[0].name);

    function setActive(newActive: any){
        active.value = newActive 
    }
    return {
        active,
        setActive,
        project_items,
        materials_items
    }
})