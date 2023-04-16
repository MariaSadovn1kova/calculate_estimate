import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLocalNavbarStore = defineStore("localNavbar", () => {
    const active = ref('')
    function setActive(newActive: any){
        active.value = newActive 
    }

    return {
        active,
        setActive
    }
})