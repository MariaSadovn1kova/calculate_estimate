import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSidebarStore = defineStore("events", () => {
   const project_items = [
    { name: "2023" },
    { name: "2022" },
    { name: "2021" }
   ]
    return {
        project_items
    }
})