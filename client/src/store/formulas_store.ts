import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useFormulasStore = defineStore("formulas", () => {
    const formula = ref()
    const formulaContent = ref()
    const formulaTechnicalContent = ref()

    function setFormula(newFormula: any){
      formula.value = newFormula
      formulaContent.value = splitFormula(newFormula.Content)
      formulaTechnicalContent.value = splitFormula(newFormula.TechnicalContent)
    }
    function addFormulaContent(value: string, technicalValue: string){
      formulaContent.value.push(value)
      formulaTechnicalContent.value.push(technicalValue)
    }
    function deleteFormulaContent(){
      formulaContent.value.pop()
      formulaTechnicalContent.value.pop()
    }

    function splitFormula(formula: any){
      const array = ref([])
      array.value = formula.split(' ')
      array.value.forEach(function(item, i) {
        if (item == ""){
          array.value.splice(i, 1)
        }
      });
      return array.value
    }

    function formulaToString(){
      const str = ref('')
      formulaContent.value.forEach((element: string) => {
        str.value += element
        str.value += " "
      });
      return str
    }
    function formulaTechnicalToString(){
      const str = ref('')
      formulaTechnicalContent.value.forEach((element: string) => {
        str.value += element
        str.value += " "
      });
      return str
    }

    async function fetchFormulas():Promise<any> {
      const res = await axios.get('http://localhost:3000/api/formulas')
      const data = res.data
  
      return data
    }
    async function fetchTechnicalFormula(ID: number):Promise<any> {
      const res = await axios.get(`http://localhost:3000/api/formula/${ID}`)
      const data = res.data
  
      return data[0].TechnicalContent
    }
    async function updateFormula(ID: number, Content: string,  TechnicalContent: string):Promise<any> {
      const res = await axios.put(`http://localhost:3000/api/formula`, { ID: ID,  Content: Content,  TechnicalContent:  TechnicalContent})
    }

    const subButtons = [
        {part: 'foundation', buttons:[
          { id: 1, value: ('ШиринаОснования'), technicalValue: ('project_store.foundationWidth')},
          { id: 2, value: ('ДлинаОснования'),  technicalValue: ('project_store.foundationLength')},
          { id: 3, value: ('ВысотаОснования'), technicalValue: ('foundationWidth.value')},
          { id: 4, value: ('ТолщинаОснования'), technicalValue: ('foundationWidth.value')},
          { id: 5, value: ('ШиринаДоски'), technicalValue: ('foundationWidth.value')},
          { id: 6, value: ('ВидАрматуры'), technicalValue: ('foundationWidth.value')},
          { id: 7, value: ('КоличествоПрутьевВКольце'), technicalValue: ('foundationWidth.value')},
        ]},
        {part: 'floor', buttons:[
          { id: 1, value: ('СуммарнаяДлинаСтен'), technicalValue: ('foundationWidth.value')},
          { id: 2, value: ('ВысотаСтен'), technicalValue: ('foundationWidth.value')},
          { id: 3, value: ('ТолщинаСтен'), technicalValue: ('foundationWidth.value')},
          { id: 4, value: ('СуммарнаяПлощадьОконИДверей'), technicalValue: ('foundationWidth.value')}
        ]},
        {part: 'floor_block', buttons:[
          { id: 1, value: ('ДлинаБлока'), technicalValue: ('foundationWidth.value')},
          { id: 2, value: ('ШиринаБлока'), technicalValue: ('foundationWidth.value')},
          { id: 3, value: ('ВысотаБлока'), technicalValue: ('foundationWidth.value')},
          { id: 4, value: ('ТолщинаРаствораВКладке'), technicalValue: ('foundationWidth.value')}
        ]},
        {part: 'floor_beam', buttons:[
          { id: 1, value: ('ШиринаБруса'), technicalValue: ('foundationWidth.value')},
          { id: 2, value: ('ДлинаБруса'), technicalValue: ('foundationWidth.value')}
        ]}
      ]

    const calculatorRows = [
        {row:1, buttons:[
          { id: 1, value: ('1'), technicalValue: ('foundationWidth.value')},
          { id: 2, value: ('2'), technicalValue: ('2')},
          { id: 3, value: ('3'), technicalValue: ('foundationWidth.value')},
          { id: 4, value: (' + '),  technicalValue: (' + ')},
        ]},
        {row:2, buttons:[
          { id: 1, value: ('4'), technicalValue: ('foundationWidth.value')},
          { id: 2, value: ('5'), technicalValue: ('foundationWidth.value')},
          { id: 3, value: ('6'), technicalValue: ('foundationWidth.value')},
          { id: 4, value: (' - '), technicalValue: ('foundationWidth.value')},
        ]},
        {row:3, buttons:[
          { id: 1, value: ('7'), technicalValue: ('foundationWidth.value')},
          { id: 2, value: ('8'), technicalValue: ('foundationWidth.value')},
          { id: 3, value: ('9'), technicalValue: ('foundationWidth.value')},
          { id: 4, value: ('/'), technicalValue: ('/')},
        ]},
        {row:4, buttons:[
          { id: 1, value: (' ( '), technicalValue: ('foundationWidth.value')},
          { id: 2, value: ('0'), technicalValue: ('foundationWidth.value')},
          { id: 3, value: (' ) '), technicalValue: ('foundationWidth.value')},
          { id: 4, value: (' * '), technicalValue: ('foundationWidth.value')},
        ]},
    ]

    return{
      subButtons,
      calculatorRows,
      formula,
      formulaContent,
      formulaTechnicalContent,
      fetchFormulas,
      updateFormula,
      setFormula,
      addFormulaContent,
      deleteFormulaContent,
      formulaToString,
      formulaTechnicalToString,
      fetchTechnicalFormula
    }
})
