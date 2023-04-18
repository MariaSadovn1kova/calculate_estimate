<template>
   <div class="sidebar__container">
    <div class="sidebar__element-container">
        <div v-for="item in sidebar_items" :key="item.name" class="sidebar__element" :class = "{'active' :item.name == active_item}" @click="setActive(item.name)">
           <div class="item__name">
            {{ item.name }}
           </div>
           <div v-if="props.count" class="projects__count">
            2
           </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
    export default { name: "main-sidebar" };
</script>

<script setup lang="ts">
    import { useSidebarStore } from "@/store/sidebar_store";
    import { defineProps, ref, onBeforeMount} from 'vue';

    const props = defineProps({
      sidebar_items: Object,
      default_active: String,
      count: Boolean
    })
    const sidebar_store = useSidebarStore();
    const active_item = ref(props.default_active);

    function setActive(newActiveItem: any){
        sidebar_store.setActive(newActiveItem);
        active_item.value = sidebar_store.active;
    }

    onBeforeMount(async () => {
        sidebar_store.setActive(props.default_active);
    })
</script>

<style lang="scss" scoped>
    .sidebar__container{    
        flex-shrink: 0;
        width: 15rem;
        background-color: #fff;
        box-shadow: 0px 4px 4px #DEE1E0;
        min-height: 100vh;
        .sidebar__element{
            padding: 0.8rem 2rem;
            color: #868585;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            height: 3.2rem;
            border-bottom: 1px solid #DEE1E0;
            .item__name{
                padding-top: 0.1rem;
            }
            .projects__count{
                margin-right: 0.8rem;
            }
        }
        .sidebar__element:hover{
            background-color: #f3f8f1;
            color: #77AF68;
            cursor: pointer;
            font-weight: 600;
        }
        .active{
            background-color: #f3f8f1;
            color: #77AF68;
            border-left: 5px solid #77AF68;
            .projects__count{
                margin-right:0;
                padding: 0.2rem 0.8rem;
                border-radius: 0.5rem;
                background: #77AF68;
                color: #fff;
            }
        }
    }
</style>