import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProjectsListStore = defineStore("projectsList", () => {
    const project_items = [
        { id: "1", date: '12.01.2023', customer: 'Иванов Иван Иванович', address: 'ул. Некрасова 30', status: 'finished'},
        { id: "1", date: '12.01.2023', customer: 'Иванов Петр Иванович', address: 'ул. Некрасова 30', status: 'unfinished'},
    ]

    
    return {
        project_items
    }
})