import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCreateProjectStore = defineStore("create-project", () => {
    const activeBuildingTab = ref('Здание 1')

    // Информация о проекте
    const customerFullName = ref()
    const address = ref()
    const phoneNumber = ref()
    const email = ref()
    const date = ref()
    const comment = ref()
    const compiler = ref()

    // Поля фундамента
    const foundationWidth = ref()
    const foundationLength = ref()
    const foundationHeight = ref()
    const foundationDepth = ref()
    const commonPerimeter = ref()
    const tapeLength = ref()
    const boardWidth = ref()
    const reinforcementType = ref()
    const reinforcementCount = ref()

    // Поля коробки
    const totalWallsLength = ref()
    const wallHeight = ref()
    const wallDepth = ref()
    const windowsAndDoors = ref()
    const blockWidth = ref()
    const blockLength = ref()
    const blockHeight = ref()
    const mortar = ref()
    const beamWidth = ref()
    const beamLength = ref()
    const beamHeight = ref()

    // Поля крыши
    const baseWidth = ref()
    const baseLength = ref()
    const liftingHeight = ref()
    const eavesOverhang = ref()
    const corniceIndentation = ref()
    const baseAdditionalWidth = ref()
    const liftingAdditionalHeight = ref()


    // Расчет фундамента
    const estimateReinforcement = ref()
    const estimateConcrete = ref()
    const estimateBoard = ref()
    const estimateRod = ref()

    // Расчет коробки
    const estimateBlock = ref()
    const estimateBeam = ref()
    const estimateFloorReinforcement = ref()
    const estimateBrick = ref()

    // Формулы
    // Фундамент
    const formulaFoundationBoard = ref()
    const formulaFoundationConcrete = ref()
    const formulaFoundationReinforcement = ref()
    const formulaFoundationRod = ref()

    // Коробка
    const formulaFloorBlock = ref()
    const formulaFloorBeam = ref()
    const formulaFloorReinforcement = ref()
    const formulaFloorBrick = ref()

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
    const foundation__active__imgs = [
        { id: 1, name: require('@/assets/img/foundation/foundation_1_1.svg')},
        { id: 2, name: require('@/assets/img/foundation/foundation_2_1.svg')},
        { id: 3, name: require('@/assets/img/foundation/foundation_3_1.svg')},
        { id: 4, name: require('@/assets/img/foundation/foundation_4_1.svg')},
        { id: 5, name: require('@/assets/img/foundation/foundation_5_1.svg')},
        { id: 6, name: require('@/assets/img/foundation/foundation_6_1.svg')},
        { id: 7, name: require('@/assets/img/foundation/foundation_7_1.svg')},
      ]
    const roof__imgs = [
        { id: 1, name: require('@/assets/img/roof/roof_1_0.svg')},
        { id: 2, name: require('@/assets/img/roof/roof_2_0.svg')},
        { id: 3, name: require('@/assets/img/roof/roof_3_0.svg')},
        { id: 4, name: require('@/assets/img/roof/roof_4_0.svg')},
      ]
      const roof__active__imgs = [
        { id: 1, name: require('@/assets/img/roof/roof_1_1.svg')},
        { id: 2, name: require('@/assets/img/roof/roof_2_1.svg')},
        { id: 3, name: require('@/assets/img/roof/roof_3_1.svg')},
        { id: 4, name: require('@/assets/img/roof/roof_4_1.svg')},
      ]
      const material__imgs = [
        { id: 1, name: require('@/assets/img/floor/material_1_0.svg')},
        { id: 2, name: require('@/assets/img/floor/material_2_0.svg')},
        { id: 3, name: require('@/assets/img/floor/material_3_0.svg')}
      ]
      const material__active__imgs = [
        { id: 1, name: require('@/assets/img/floor/material_1_1.svg')},
        { id: 2, name: require('@/assets/img/floor/material_2_1.svg')},
        { id: 3, name: require('@/assets/img/floor/material_3_1.svg')}
      ]
    const active_foundation = ref(1);
    const active_roof = ref(1);
    const active_floor = ref(1);

    const box_inputs = [
        {id: 1, standard_fields:[
            { name: "Материал" },
            { name: "Суммарная длина стен" },
            { name: "Высота стен" },
            { name: "Толщина стен" },
            { name: "Суммарная площадь окон и дверей" },
        ]},
        {id: 2, board_fields:[
            { name: "Ширина бруса" },
            { name: "Высота бруса" },
        ]},
        {id: 3, brick_fields:[
            { name: "Толщина раствора в кладке" },
            { name: "Кладочная сетка" },
        ]},
        {id: 4, brick_fields:[
            { name: "Длина блока" },
            { name: "Ширина блока" },
            { name: "Высота блока" },
            { name: "Толщина раствора в кладке" },
        ]}
    ]

    function setActiveFoundation( newActive: any){
        active_foundation.value = newActive
    }
    function setActiveRoof( newActive: any){
        active_roof.value = newActive
    }
    function setActiveFloor( newActive: any){
        active_floor.value = newActive
    }
    function setActiveBuildingTab(newActive: any){
        activeBuildingTab.value = newActive 
    }
    function setActiveTab( newActive: any){
        activeTab.value = newActive
    }

    return {
        activeBuildingTab,
        general_inputs_items,
        foundation__imgs,
        tabs,
        activeTab,
        foundation__active__imgs,
        active_foundation,
        active_roof,
        box_inputs,
        roof__imgs,
        roof__active__imgs,
        foundationWidth,
        foundationLength,
        foundationHeight,
        foundationDepth,
        boardWidth,
        reinforcementType,
        reinforcementCount,
        tapeLength,
        commonPerimeter,
        customerFullName,
        address,
        phoneNumber,
        email,
        date,
        comment,
        material__imgs,
        active_floor,
        material__active__imgs,
        totalWallsLength,
        wallHeight,
        wallDepth,
        windowsAndDoors,
        blockWidth,
        blockLength,
        blockHeight,
        mortar,
        beamWidth,
        beamLength,
        beamHeight,
        baseWidth,
        baseLength,
        liftingHeight,
        eavesOverhang,
        corniceIndentation,
        baseAdditionalWidth,
        liftingAdditionalHeight,
        compiler,
        estimateReinforcement,
        estimateConcrete,
        estimateBoard,
        estimateRod,
        formulaFoundationBoard,
        formulaFoundationConcrete,
        formulaFoundationReinforcement,
        formulaFoundationRod,
        estimateBlock,
        estimateBeam,
        estimateFloorReinforcement,
        estimateBrick,
        formulaFloorBlock,
        formulaFloorBeam,
        formulaFloorReinforcement,
        formulaFloorBrick,
        setActiveFloor,
        setActiveRoof,
        setActiveFoundation,
        setActiveBuildingTab,
        setActiveTab,
    }
})