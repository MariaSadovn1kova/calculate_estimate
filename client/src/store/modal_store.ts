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
    function addFormulaContent(x: string){
        formulaContent.value.push(x)
    }
    function deleteFormulaContent(){
        formulaContent.value.pop()
    }

    function formulaToString(){
        const str = ref('')
        formulaContent.value.forEach((element: string) => {
            str.value += element
        });
        return str
    }

    return {
        show,
        project,
        formula,
        formulaContent,
        setProject,
        setShow,
        setFormula,
        addFormulaContent,
        deleteFormulaContent,
        formulaToString
    }
})