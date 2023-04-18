<template>
  <div class="app">
    <main-navbar class="main__navbar"/>
    <div class="app__container">
      <main-sidebar v-if="route.name == 'projects'" class="main__sidebar" :sidebar_items = 'sidebar_store.project_items' :default_active = 'sidebar_store.project_items[0].name' :count = 'true'/>
      <main-sidebar v-if="route.name == 'materials'" class="main__sidebar" :sidebar_items = 'sidebar_store.materials_items' :default_active = 'sidebar_store.materials_items[0].name'/>
      <main-sidebar v-if="route.name == 'create-project'" class="main__sidebar" :sidebar_items = 'sidebar_store.create_items' :default_active = 'sidebar_store.create_items[0].name'/>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useSidebarStore } from "@/store/sidebar_store";

const sidebar_store = useSidebarStore();
const route = useRoute();

</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    .app{
      min-height: 100vh;
      background-color: #f3f8f3;
      .main__navbar{
        position: absolute;
        width: 100%;
      }
      .app__container{
        display: flex;
        .main__sidebar {
          padding-top: 6rem;
        }
        .router-view{
          width: 100%;
          padding: 7rem 6rem 0rem 6rem;
          margin-bottom: 10rem;
        }
      }
    }
  }
</style>
