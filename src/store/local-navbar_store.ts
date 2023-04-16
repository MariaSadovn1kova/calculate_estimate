import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLocalNavbarStore = defineStore("localNavbar", () => {
    const projects_active = ref('Все проекты')
    function setProjectsActive(newActive: any){
        projects_active.value = newActive 
    }

    return {
        projects_active,
        setProjectsActive
    }
})