import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProjectsListStore = defineStore("projectsList", () => {
    const project_items = [
        { name: "Все проекты" },
        { name: "Текущие проекты" },
        { name: "Завершенные проекты" }
    ]

    return {
        project_items
    }
})