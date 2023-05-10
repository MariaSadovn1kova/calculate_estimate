import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";


export const useProjectsStore = defineStore("projects", () => {
    const activeProject = ref()
    const projectAddress = ref()

    function setProject(newProject: string){
        activeProject.value = newProject
    }

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

    async function deleteProject(ID: number):Promise<any> {
        const res = await axios.delete(`http://localhost:3000/api/project/${ID}`)
    }

    async function fetchOneProject(ID: number):Promise<any> {
        const res = await axios.get(`http://localhost:3000/api/project/${ID}`)
        const data = res.data
    
        return data
    }

    return {
        activeProject,
        projectAddress,
        setProject,
        fetchProjects,
        fetchFinishedProjects,
        fetchUnfinishedProjects,
        deleteProject,
        fetchOneProject
    }
})