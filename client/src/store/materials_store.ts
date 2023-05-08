import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";


export const useMaterialStore = defineStore("materials", () => {
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

    return{
        fetchReinforcement,
        fetchBrick,
        fetchBoard,
        fetchConcrete,
        fetchBlock,
        fetchBeam,
        fetchOther
    }
})