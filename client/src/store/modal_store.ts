import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useModalStore = defineStore("modal", () => {
    const show = ref(false)
    const project = ref()
    const formula = ref()
    const formulaContent = ref()
    const material = ref()
    const accounting = ref([])
    
    // Материалы
    const materialType = ref("")
    const materialName = ref("")
    const materialMeasurement = ref("")
    const materialCost = ref()
    const materialQuantity = ref()
    const materialPrice = ref()
    const materialDate = ref()

    const createType = ref("")
    const createName = ref("")
    const createMeasurement = ref("")
    const createCost = ref()
    const createQuantity = ref()

    async function getAccounting(ID: number){
        const res = await axios.get(`http://localhost:3000/api/accounting/${ID}`)
        accounting.value = res.data
    }
    async function createAccounting(BuildingMaterial_ID: number, Quantity: number, OperationType: string, Date: Date, Price: number){
        const res = await axios.post(`http://localhost:3000/api/accounting`,  { BuildingMaterial_ID: BuildingMaterial_ID, Quantity: Quantity, OperationType: OperationType, Date: Date, Price: Price})
        materialQuantity.value = ''
        materialPrice.value = ''
        materialDate.value = ''
    }
    async function updateMaterialPrice(ID: number, Quantity: number){
        const res = await axios.put(`http://localhost:3000/api/accounting`,  { ID: ID, Quantity: Quantity })
    }
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
        accounting,
        materialQuantity,
        materialPrice,
        materialDate,
        setProject,
        setShow,
        setFormula,
        addFormulaContent,
        deleteFormulaContent,
        formulaToString,
        setMaterial,
        getAccounting,
        createAccounting,
        updateMaterialPrice
    }
})