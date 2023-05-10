import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const show = ref(false)
    const project = ref()
    const formula = ref()
    const formulaContent = ref()
    const material = ref()

    // Материалы
    const materialType = ref("")
    const materialName = ref("")
    const materialMeasurement = ref("")
    const materialCost = ref()

    const createType = ref("")
    const createName = ref("")
    const createMeasurement = ref("")
    const createCost = ref()
    const createQuantity = ref()

    function setShow(){
        show.value = !show.value
    }
    function setProject(newProject: any){
        project.value = newProject
    }
    function setMaterial(newMaterial: any){
        material.value = newMaterial
        materialType.value = material.value.Type
        materialName.value = material.value.Name
        materialMeasurement.value = material.value.UnitOfMeasurement
        materialCost.value = material.value.DeclaredValue
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
            str.value += " "
            str.value += element
        });
        return str
    }

    return {
        show,
        project,
        formula,
        formulaContent,
        material,
        materialType,
        materialName,
        materialMeasurement,
        materialCost,
        createType,
        createName,
        createMeasurement,
        createCost,
        createQuantity,
        setProject,
        setShow,
        setFormula,
        addFormulaContent,
        deleteFormulaContent,
        formulaToString,
        setMaterial
    }
})