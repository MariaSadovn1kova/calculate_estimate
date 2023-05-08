import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";


export const useMaterialStore = defineStore("materials", () => {
    async function fetchReinforcement():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/materials/reinforcement')
        const data = res.data
    
        return data
    }

    return{
        fetchReinforcement
    }
})