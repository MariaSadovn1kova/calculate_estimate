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
        if(!(parseInt(element) || element == '.' || element == '0')){
          str.value += " "
        }
      });
      return str
    }
    function formulaTechnicalToString(){
      const str = ref('')
      formulaTechnicalContent.value.forEach((element: string) => {
        str.value += element
        if(!(parseInt(element) || element == '.' || element == '0')){
          str.value += " "
        }
      });
      return str
    }

    async function fetchFormulas():Promise<any> {
      const res = await axios.get('http://localhost:3000/api/formulas')
      const data = res.data
  
      return data
    }
    async function fetchTechnicalFormula(ID: number):Promise<any> {
      const res = await axios.get(`http://localhost:3000/api/technical/${ID}`)
      const data = res.data
  
      return data[0].TechnicalContent
    }
    async function fetchFormula(ID: number):Promise<any> {
      const res = await axios.get(`http://localhost:3000/api/formula/${ID}`)
      const data = res.data
  
      return data[0].Content
    }
    async function updateFormula(ID: number, Content: string,  TechnicalContent: string):Promise<any> {
      const res = await axios.put(`http://localhost:3000/api/formula`, { ID: ID,  Content: Content,  TechnicalContent:  TechnicalContent})
    }

    const subButtons = [
        {part: 'foundation', buttons:[
          { id: 1, value: ('ШиринаОснования'), technicalValue: ('project_store.foundationWidth')},
          { id: 2, value: ('ДлинаОснования'),  technicalValue: ('project_store.foundationLength')},
          { id: 3, value: ('ВысотаОснования'), technicalValue: ('project_store.foundationHeight')},
          { id: 4, value: ('ШиринаДоски'), technicalValue: ('project_store.boardWidth')},
          { id: 5, value: ('ВидАрматуры'), technicalValue: ('project_store.reinforcementType')},
          { id: 6, value: ('КоличествоПрутьевВКольце'), technicalValue: ('project_store.reinforcementCount')},
        ], tape_buttons: [
          { id: 1, value: ('ДлинаЛенты'), technicalValue: ('project_store.tapeLength')},
          { id: 2, value: ('ТолщинаОснования'), technicalValue: ('project_store.foundationDepth')},
        ], nonstandard_buttons: [
          { id: 1, value: ('ВысотаОснования'), technicalValue: ('project_store.foundationHeight')},
          { id: 2, value: ('ОбщийПериметр'), technicalValue: ('project_store.commonPerimeter')},
          { id: 3, value: ('ШиринаДоски'), technicalValue: ('project_store.boardWidth')},
          { id: 4, value: ('ВидАрматуры'), technicalValue: ('project_store.reinforcementType')},
          { id: 5, value: ('КоличествоПрутьевВКольце'), technicalValue: ('project_store.reinforcementCount')},
        ], nonstandard_tape_buttons: [
          { id: 1, value: ('ТолщинаОснования'), technicalValue: ('project_store.foundationDepth')},
          { id: 2, value: ('ВысотаОснования'), technicalValue: ('project_store.foundationHeight')},
          { id: 3, value: ('ОбщийПериметр'), technicalValue: ('project_store.commonPerimeter')},
          { id: 4, value: ('ШиринаДоски'), technicalValue: ('project_store.boardWidth')},
          { id: 5, value: ('ВидАрматуры'), technicalValue: ('project_store.reinforcementType')},
          { id: 6, value: ('КоличествоПрутьевВКольце'), technicalValue: ('project_store.reinforcementCount')},
        ], nonstandard_tape_buttons_2: [
          { id: 1, value: ('ТолщинаОснования'), technicalValue: ('project_store.foundationDepth')},
          { id: 2, value: ('ВысотаОснования'), technicalValue: ('project_store.foundationHeight')},
          { id: 3, value: ('ОбщийПериметр'), technicalValue: ('project_store.commonPerimeter')},
          { id: 4, value: ('ДлинаЛенты'), technicalValue: ('project_store.tapeLength')},
          { id: 5, value: ('ШиринаДоски'), technicalValue: ('project_store.boardWidth')},
          { id: 6, value: ('ВидАрматуры'), technicalValue: ('project_store.reinforcementType')},
          { id: 7, value: ('КоличествоПрутьевВКольце'), technicalValue: ('project_store.reinforcementCount')},
        ]},
        {part: 'floor', buttons:[
          { id: 1, value: ('СуммарнаяДлинаСтен'), technicalValue: ('project_store.totalWallsLength')},
          { id: 2, value: ('ВысотаСтен'), technicalValue: ('project_store.wallHeight')},
          { id: 3, value: ('ТолщинаСтен'), technicalValue: ('project_store.wallDepth')},
          { id: 4, value: ('СуммарнаяПлощадьОконИДверей'), technicalValue: ('project_store.windowsAndDoors')}
        ], buttons_block:[
          { id: 1, value: ('ШиринаБлока'), technicalValue: ('project_store.blockWidth')},
          { id: 2, value: ('ДлинаБлока'), technicalValue: ('project_store.blockLength')},
          { id: 3, value: ('ВысотаБлока'), technicalValue: ('project_store.blockHeight')},
          { id: 4, value: ('ТолщинаРаствораВКладке'), technicalValue: ('project_store.mortar')}
        ], buttons_beam:[
          { id: 1, value: ('ШиринаБруса'), technicalValue: ('project_store.beamWidth')},
          { id: 2, value: ('ДлинаБруса'), technicalValue: ('project_store.beamLength')},
          { id: 3, value: ('ВысотаБруса'), technicalValue: ('project_store.beamHeight')},
        ]},
        {part: 'roof', buttons:[
          { id: 1, value: ('ШиринаОснования'), technicalValue: ('project_store.baseWidth')},
          { id: 2, value: ('ДлинаОснования'), technicalValue: ('project_store.baseLength')},
          { id: 3, value: ('ВысотаПодъема'), technicalValue: ('project_store.liftingHeight')},
          { id: 4, value: ('СвесКарниза'), technicalValue: ('project_store.eavesOverhang')},
          { id: 5, value: ('ВыпускКарниза'), technicalValue: ('project_store.corniceIndentation')}
        ], buttons_additional:[
          { id: 1, value: ('ВысотаДополнительногоПодъема'), technicalValue: ('project_store.baseAdditionalWidth')},
          { id: 2, value: ('ШиринаДополнительногоОснования'), technicalValue: ('project_store.liftingAdditionalHeight')},
        ], buttons_gable:[
          { id: 1, value: ('ШиринаОснования'), technicalValue: ('project_store.baseWidth')},
          { id: 2, value: ('ДлинаОснования'), technicalValue: ('project_store.baseLength')},
          { id: 3, value: ('ВысотаПодъема'), technicalValue: ('project_store.liftingHeight')},
          { id: 4, value: ('СвесКарниза'), technicalValue: ('project_store.eavesOverhang')},
          { id: 5, value: ('ШиринаЗаложения'), technicalValue: ('project_store.baseAdditionalWidth')}
        ]},
      ]

    const calculatorRows = [
        {row:1, buttons:[
          { id: 1, value: ('1'), technicalValue: ('1')},
          { id: 2, value: ('2'), technicalValue: ('2')},
          { id: 3, value: ('3'), technicalValue: ('3')},
          { id: 4, value: (' + '),  technicalValue: ('+')},
        ]},
        {row:2, buttons:[
          { id: 1, value: ('4'), technicalValue: ('4')},
          { id: 2, value: ('5'), technicalValue: ('5')},
          { id: 3, value: ('6'), technicalValue: ('6')},
          { id: 4, value: (' - '), technicalValue: ('-')},
        ]},
        {row:3, buttons:[
          { id: 1, value: ('7'), technicalValue: ('7')},
          { id: 2, value: ('8'), technicalValue: ('8')},
          { id: 3, value: ('9'), technicalValue: ('9')},
          { id: 4, value: ('/'), technicalValue: ('/')},
        ]},
        {row:4, buttons:[
          { id: 1, value: (' ( '), technicalValue: ('(')},
          { id: 2, value: ('0'), technicalValue: ('0')},
          { id: 3, value: (' ) '), technicalValue: (')')},
          { id: 4, value: (' * '), technicalValue: ('*')},
        ]}
    ]

    return{
      subButtons,
      calculatorRows,
      formula,
      formulaContent,
      formulaTechnicalContent,
      fetchFormula,
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
