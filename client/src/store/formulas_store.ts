import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useFormulasStore = defineStore("formulas", () => {
    async function fetchFormulas():Promise<any> {
        const res = await axios.get('http://localhost:3000/api/formulas')
        const data = res.data
    
        return data
    }
    async function updateFormula(ID: number, Content: string):Promise<any> {
        const res = await axios.put(`http://localhost:3000/api/formula`, { ID: ID,  Content: Content})
    }

    return{
        fetchFormulas,
        updateFormula
    }
})
