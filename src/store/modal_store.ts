import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const show = ref(false)

    function setShow(){
        show.value = !show.value
    }

    return {
        show,
        setShow
    }
})