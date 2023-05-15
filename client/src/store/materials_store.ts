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
    const dataRoofMaterial = ref()
    const dataOther = ref()
    const modalContext = ref()
    const active_material = ref('Блок')

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
        dataRoofMaterial.value = await fetchRoofMaterial()
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
    async function fetchRoofMaterial():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/roofmaterial')
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
    function setActiveMaterial(newMaterial: any){
        active_material.value = newMaterial
    }

    const material__imgs = [
        {imgs:[
            { id: 0, value: 'Блок', name: require('@/assets/img/materials/icons/material_1_0.svg')},
            { id: 1, value: 'Брус', name: require('@/assets/img/materials/icons/material_2_0.svg')},
            { id: 2, value: 'Кирпич', name: require('@/assets/img/materials/icons/material_3_0.svg')},
            { id: 3, value: 'Бетон', name: require('@/assets/img/materials/icons/material_4_0.svg')},
        ]},
        {imgs:[
            { id: 4, value: 'Кровельный материал', name: require('@/assets/img/materials/icons/material_6_0.svg')},
            { id: 5, value: 'Арматура', name: require('@/assets/img/materials/icons/material_7_0.svg')},
            { id: 6, value: 'Доска', name: require('@/assets/img/materials/icons/material_8_0.svg')},
            { id: 7, value: 'Прочее', name: require('@/assets/img/materials/icons/material_5_0.svg')},
        ]},
        ]
    const material__active__imgs = [
            { id: 0, value: 'Блок', name: require('@/assets/img/materials/icons/material_1_1.svg')},
            { id: 1, value: 'Брус', name: require('@/assets/img/materials/icons/material_2_1.svg')},
            { id: 2, value: 'Кирпич', name: require('@/assets/img/materials/icons/material_3_1.svg')},
            { id: 3, value: 'Бетон', name: require('@/assets/img/materials/icons/material_4_1.svg')},
            { id: 4, value: 'Кровельный материал', name: require('@/assets/img/materials/icons/material_6_1.svg')},
            { id: 5, value: 'Арматура', name: require('@/assets/img/materials/icons/material_7_1.svg')},
            { id: 6, value: 'Доска', name: require('@/assets/img/materials/icons/material_8_1.svg')},
            { id: 7, value: 'Прочее', name: require('@/assets/img/materials/icons/material_5_1.svg')},
        ]

    return{
        dataReinforcement,
        dataBrick, 
        dataBoard, 
        dataConcrete,
        dataBlock,
        dataBeam,
        dataRoofMaterial,
        dataOther,
        modalContext,
        material__imgs,
        material__active__imgs, 
        active_material,
        fetchReinforcement,
        setModalContext,
        fetchBrick,
        fetchBoard,
        fetchConcrete,
        fetchBlock,
        fetchBeam,
        fetchRoofMaterial,
        fetchOther,
        updateMaterial,
        deleteMaterial,
        fetchMaterials,
        insertMaterial,
        setActiveMaterial
    }
})