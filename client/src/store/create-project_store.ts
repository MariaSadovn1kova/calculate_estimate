import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCreateProjectStore = defineStore("create-project", () => {
    const activeBuildingTab = ref('Здание 1')
    const foundation_inputs_items = [
        {id: 1, standard_fields:[
          { name: "Ширина" },
          { name: "Длина" },
          { name: "Высота" },
          { name: "Толщина" },
        ]},
        {id: 2, board_fields:[
            { name: "Ширина доски" },
        ]},
        {id: 3, reinforcement_fields:[
            { name: "Вид арматуры" },
            { name: "Количество прутьев в кольце" },
        ]}
    ]
    const general_inputs_items = [
        { name: "Тип здания" },
        { name: "Количество этажей" },
        { name: "1 этаж - материал" },
        { name: "Наличие крыльца" },
    ]
    const foundation__imgs = [
        {id:1, imgs:[
            { id: 1, name: require('@/assets/img/foundation/foundation_1_0.svg')},
            { id: 2, name: require('@/assets/img/foundation/foundation_2_0.svg')},
            { id: 3, name: require('@/assets/img/foundation/foundation_3_0.svg')},
            { id: 4, name: require('@/assets/img/foundation/foundation_4_0.svg')},
        ]},
        {id:2, imgs:[
            { id: 5, name: require('@/assets/img/foundation/foundation_5_0.svg')},
            { id: 6, name: require('@/assets/img/foundation/foundation_6_0.svg')},
            { id: 7, name: require('@/assets/img/foundation/foundation_7_0.svg')},
        ]},
    ]
    const tabs = [
        { name: "Здание 1" },
        { name: "Здание 2" },
    ]
    const activeTab = ref(tabs[0].name)
    const foundation__active = [
        { id: 1, name: require('@/assets/img/foundation/foundation_1_1.svg')},
        { id: 2, name: require('@/assets/img/foundation/foundation_2_1.svg')},
        { id: 3, name: require('@/assets/img/foundation/foundation_3_1.svg')},
        { id: 4, name: require('@/assets/img/foundation/foundation_4_1.svg')},
        { id: 5, name: require('@/assets/img/foundation/foundation_5_1.svg')},
        { id: 6, name: require('@/assets/img/foundation/foundation_6_1.svg')},
        { id: 7, name: require('@/assets/img/foundation/foundation_7_1.svg')},
      ]
    const active_foundation = ref(1);
      
    function setActiveFoundation( newActive: any){
        active_foundation.value = newActive
    }
    function setActiveBuildingTab(newActive: any){
        activeBuildingTab.value = newActive 
    }
    function setActiveTab( newActive: any){
        activeTab.value = newActive
    }
    return {
        activeBuildingTab,
        foundation_inputs_items,
        general_inputs_items,
        foundation__imgs,
        tabs,
        activeTab,
        foundation__active,
        active_foundation,
        setActiveFoundation,
        setActiveBuildingTab,
        setActiveTab
    }
})