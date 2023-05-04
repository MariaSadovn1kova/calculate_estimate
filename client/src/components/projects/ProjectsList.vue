<template>
  <!-- <div v-if="navbar_store.active == 'Все проекты'" class="list__container">
    <project-card v-for="project in projects_list_store.projects" :key="project.id" :project = 'project'/>
  </div>
  <div v-if="navbar_store.active == 'Текущие проекты'" class="list__container">
    <project-card v-for="project in projects_list_store.unfinishedProjects" :key="project.id" :project = 'project'/>
  </div>
  <div v-if="navbar_store.active == 'Завершенные проекты'" class="list__container">
    <project-card v-for="project in projects_list_store.finishedProjects" :key="project.id" :project = 'project'/>
  </div> -->
  <div>
    <project-card v-for="project in data" :key="project.Id" :project = 'project'/>
  </div>
</template>

<script lang="ts">
  export default { name: "projects-list" };
</script>

<script setup lang="ts">
import { useLocalNavbarStore } from "@/store/local-navbar_store";
import { onBeforeMount, defineProps, ref } from 'vue';

const props = defineProps({
  data: Object
})
const navbar_store = useLocalNavbarStore();
</script>

<style>

</style>