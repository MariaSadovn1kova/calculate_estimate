import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProjectsListStore = defineStore("projectsList", () => {
    const projects = [
        { id: "1", date: '12.01.2023', customer: 'Иванов Иван Иванович', address: 'ул. Некрасова 30', status: 'finished'},
        { id: "2", date: '12.01.2023', customer: 'Иванов Петр Иванович', address: 'ул. Некрасова 35', status: 'unfinished'},
    ]
    const unfinishedProjects = [{}]
    projects.forEach(
        function (item, i, arr){
            if(item.status == 'unfinished'){
                unfinishedProjects.push(item)
            }
        }
    )

    const finishedProjects = []

    return {
        projects,
        unfinishedProjects
    }
})