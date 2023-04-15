import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLocalNavbarStore = defineStore("events", () => {
    let active = 'projects'
    function setActive(newActive: any){
        active = newActive
        console.log(active)
    }

    return {
        active,
        setActive
    }
})