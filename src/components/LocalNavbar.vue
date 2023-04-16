<template>
 <div class="local-navbar__container">
    <div class="navabar-item__container">
        <div class="local-navbar__item" 
            v-for="item in navbar_items" 
            :key="item.name" 
            :class = "{'active' :item.name == active_item}" 
            @click="setActive(item.name)">{{ item.name }}</div>
    </div>
    <div class="btn__container">
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
    export default { name: "local-navbar" };
</script>
<script setup lang="ts">
    import { useLocalNavbarStore } from "@/store/local-navbar_store";
    import {onBeforeMount, ref } from 'vue';

    const navbar_store = useLocalNavbarStore();
    const navbar_items = navbar_store.project_items;
    const active_item = ref(navbar_items[0].name)

    function setActive(newActive: any){
        navbar_store.setActive(newActive);
        active_item.value = navbar_store.active;
    }
</script>

<style lang="scss" scoped>
.local-navbar__container{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #D8D8D8;
    margin-bottom: 3rem;
    margin-top: 1rem;
    .navabar-item__container{
        display: flex;
    }
    .local-navbar__item{
        padding: 1rem 0rem 1rem 0;
        margin-right: 2rem;
        color: #828282;
    }
    .local-navbar__item.active{
        color:#6BBF54;
        border-bottom: 3px solid #6BBF54;
    }
    .local-navbar__item:hover{
        color: #6BBF54;
        cursor: pointer;
    }
}
</style>