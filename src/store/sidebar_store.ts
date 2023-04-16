import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
    const active = ref('');
    function setActive(newActive: any){
        active.value = newActive 
    }

    const project_items = [
        { name: "2023" },
        { name: "2022" },
        { name: "2021" }
    ]
    return {
        active,
        setActive,
        project_items
    }
})