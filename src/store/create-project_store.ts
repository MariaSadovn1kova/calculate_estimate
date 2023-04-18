import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCreateProjectStore = defineStore("create-project", () => {
    const activeBuildingTab = ref('Здание 1')
    function setActiveBuildingTab(newActive: any){
        activeBuildingTab.value = newActive 
    }

    return {
        activeBuildingTab,
        setActiveBuildingTab
    }
})