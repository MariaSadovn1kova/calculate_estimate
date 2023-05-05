import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const show = ref(false)
    const project = ref()
    const formula = ref()
    const formulaContent = ref()

    function setShow(){
        show.value = !show.value
    }
    function setProject(newProject: any){
        project.value = newProject
    }
    function setFormula(newFormula: any){
        formula.value = newFormula
        formulaContent.value = newFormula.Content.split(" ")
    }
    function addFormulaContent(x: number){
        formulaContent.value.push(x)
    }

    return {
        show,
        project,
        formula,
        formulaContent,
        setProject,
        setShow,
        setFormula,
        addFormulaContent
    }
})