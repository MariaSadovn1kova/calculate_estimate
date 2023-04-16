import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
    const project_items = [
        { name: "2023" },
        { name: "2022" },
        { name: "2021" }
    ]
    const years_active = ref(project_items[0].name);

    const materials_items =[
        { name: "Фундамент" },
        { name: "Коробка" },
        { name: "Крыша" }
    ]


    function setYearActive(newActive: any){
        years_active.value = newActive 
    }
    return {
        years_active,
        setYearActive,
        project_items,
        materials_items
    }
})