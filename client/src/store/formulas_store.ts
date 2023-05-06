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

    const subButtons = [
        {part: 'foundation', buttons:[
            { id: 1, value: ('ШиринаОснования')},
            { id: 2, value: ('ДлинаОснования')},
            { id: 3, value: ('ВысотаОснования')},
            { id: 4, value: ('ТолщинаОснования')},
            { id: 5, value: ('ШиринаДоски')},
            { id: 6, value: ('ВидАрматуры')},
            { id: 7, value: ('КоличествоПрутьевВКольце')},
        ]},
        {part: 'floor', buttons:[
            { id: 1, value: ('СуммарнаяДлинаСтен')},
            { id: 2, value: ('ВысотаСтен')},
            { id: 3, value: ('ТолщинаСтен')},
            { id: 4, value: ('СуммарнаяПлощадьОконИДверей')}
        ]},
        {part: 'floor_block', buttons:[
            { id: 1, value: ('ДлинаБлока')},
            { id: 2, value: ('ШиринаБлока')},
            { id: 3, value: ('ВысотаБлока')},
            { id: 4, value: ('ТолщинаРаствораВКладке')}
        ]},
        {part: 'floor_beam', buttons:[
            { id: 1, value: ('ШиринаБруса')},
            { id: 2, value: ('ДлинаБруса')}
        ]}
      ]

    const calculatorRows = [
        {row:1, buttons:[
          { id: 1, value: ('1')},
          { id: 2, value: ('2')},
          { id: 3, value: ('3')},
          { id: 4, value: (' + ')},
        ]},
        {row:2, buttons:[
          { id: 1, value: ('4')},
          { id: 2, value: ('5')},
          { id: 3, value: ('6')},
          { id: 4, value: (' - ')},
        ]},
        {row:3, buttons:[
          { id: 1, value: ('7')},
          { id: 2, value: ('8')},
          { id: 3, value: ('9')},
          { id: 4, value: ('/')},
        ]},
        {row:4, buttons:[
          { id: 1, value: (' ( ')},
          { id: 2, value: ('0')},
          { id: 3, value: (' ) ')},
          { id: 4, value: (' * ')},
        ]},
    ]

    return{
        fetchFormulas,
        updateFormula,
        subButtons,
        calculatorRows
    }
})
