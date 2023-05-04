import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const show = ref(false)
    const project = ref()


    function setShow(){
        show.value = !show.value
    }
    function setProject(newProject: any){
        project.value = newProject
    }


    return {
        show,
        project,
        setProject,
        setShow
    }
})