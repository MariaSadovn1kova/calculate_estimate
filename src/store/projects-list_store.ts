import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProjectsListStore = defineStore("projectsList", () => {
    const projects = [
        { id: "1", date: '12.01.2023', customer: 'Иванов Иван Иванович', address: 'ул. Некрасова 30', status: 'finished'},
        { id: "2", date: '12.01.2023', customer: 'Иванов Петр Иванович', address: 'ул. Некрасова 35', status: 'unfinished'},
        { id: "3", date: '12.01.2023', customer: 'Иванов Петр Иванович', address: 'ул. Некрасова 35', status: 'unfinished'},
        { id: "4", date: '12.01.2023', customer: 'Иванов Петр Иванович', address: 'ул. Некрасова 35', status: 'unfinished'},
    ]
    const unfinishedProjects: object[] = [];
    const finishedProjects: object[] = [];


    projects.forEach(
        function (item){
            if(item.status == 'unfinished'){
                unfinishedProjects.push(item)
            } else {
                finishedProjects.push(item)
            }
        }
    )

    return {
        projects,
        unfinishedProjects,
        finishedProjects
    }
})