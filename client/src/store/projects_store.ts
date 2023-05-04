import { defineStore } from "pinia";
import axios from "axios";


export const useProjectsStore = defineStore("projects", () => {
    async function fetchProjects():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/projects')
        const data = res.data
    
        return data
    }

    async function fetchFinishedProjects():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/projects/finished')
        const data = res.data
    
        return data
    }

    async function fetchUnfinishedProjects():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/projects/unfinished')
        const data = res.data
    
        return data
    }

    // const projects = [
    //     { id: "1", date: '12.01.2023', customer: 'Иванов Иван Иванович', address: 'ул. Некрасова 30', status: 'finished'},
    //     { id: "2", date: '12.01.2023', customer: 'Оп Петр Иванович', address: 'ул. Некрасова-Люксенбург 35', status: 'unfinished'},
    //     { id: "3", date: '12.01.2023', customer: 'Иванов Петр Иванович', address: 'ул. Некрасова 35', status: 'unfinished'},
    //     { id: "4", date: '12.01.2023', customer: 'Иванов Петр Иванович', address: 'ул. Некрасова 35', status: 'unfinished'},
    // ]
    // const unfinishedProjects: object[] = [];
    // const finishedProjects: object[] = [];


    // projects.forEach(
    //     function (item){
    //         if(item.status == 'unfinished'){
    //             unfinishedProjects.push(item)
    //         } else {
    //             finishedProjects.push(item)
    //         }
    //     }
    // )

    return {
        fetchProjects,
        fetchFinishedProjects,
        fetchUnfinishedProjects
    }
})