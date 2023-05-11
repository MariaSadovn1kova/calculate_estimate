import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";


export const useMaterialStore = defineStore("materials", () => {
    const dataReinforcement = ref()
    const dataBrick = ref()
    const dataBoard = ref()
    const dataConcrete = ref()
    const dataBlock = ref()
    const dataBeam = ref()
    const dataOther = ref()
    const modalContext = ref()

    function setModalContext (newModalContext: string){
        modalContext.value = newModalContext
    }

    async function fetchMaterials() {
        dataReinforcement.value = await fetchReinforcement()
        dataBrick.value = await fetchBrick()
        dataBoard.value = await fetchBoard()
        dataConcrete.value = await fetchConcrete()
        dataBlock.value = await fetchBlock()
        dataBeam.value = await fetchBeam()
        dataOther.value = await fetchOther()
    }
    async function fetchReinforcement():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/reinforcement')
        const data = res.data
    
        return data
    }
    async function fetchBrick():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/brick')
        const data = res.data
    
        return data
    }
    async function fetchBoard():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/board')
        const data = res.data
    
        return data
    }
    async function fetchConcrete():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/concrete')
        const data = res.data
    
        return data
    }
    async function fetchBlock():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/block')
        const data = res.data
    
        return data
    }
    async function fetchBeam():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/beam')
        const data = res.data
    
        return data
    }
    async function fetchOther():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/other')
        const data = res.data
    
        return data
    }
    async function updateMaterial(Type: string, Name: string, UnitOfMeasurement: string, DeclaredValue: number, ID: number):Promise<any> {
        const res = await axios.put('http://localhost:3000/api/materials', { Type: Type, Name: Name, UnitOfMeasurement: UnitOfMeasurement, DeclaredValue: DeclaredValue, ID: ID})
    }
    async function deleteMaterial(ID: number):Promise<any> {
        const res = await axios.delete(`http://localhost:3000/api/materials/${ID}`)
    }
    async function insertMaterial(Type: string, Name: string, UnitOfMeasurement: string, DeclaredValue: number, Quantity:number):Promise<any> {
        const res = await axios.post(`http://localhost:3000/api/materials`, { Type: Type, Name: Name, UnitOfMeasurement: UnitOfMeasurement, DeclaredValue: DeclaredValue,  Quantity: Quantity})
    }

    return{
        dataReinforcement,
        dataBrick, 
        dataBoard, 
        dataConcrete,
        dataBlock,
        dataBeam,
        dataOther,
        modalContext,
        fetchReinforcement,
        setModalContext,
        fetchBrick,
        fetchBoard,
        fetchConcrete,
        fetchBlock,
        fetchBeam,
        fetchOther,
        updateMaterial,
        deleteMaterial,
        fetchMaterials,
        insertMaterial,
    }
})