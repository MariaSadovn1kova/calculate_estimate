<template>
  <div v-if="navbar_store.projects_active == 'Все проекты'" class="list__container">
    <project-card v-for="project in projects_list_store.projects" :key="project.id" :project = 'project'/>
  </div>
  <div v-if="navbar_store.projects_active == 'Текущие проекты'" class="list__container">
    <project-card v-for="project in projects_list_store.unfinishedProjects" :key="project.id" :project = 'project'/>
  </div>
  <div v-if="navbar_store.projects_active == 'Завершенные проекты'" class="list__container">
    <project-card v-for="project in projects_list_store.finishedProjects" :key="project.id" :project = 'project'/>
  </div>
</template>

<script lang="ts">
  export default { name: "projects-list" };
</script>

<script setup lang="ts">
import { useProjectsListStore } from "@/store/projects-list_store";
import { useLocalNavbarStore } from "@/store/local-navbar_store";

const projects_list_store = useProjectsListStore();
const navbar_store = useLocalNavbarStore();

</script>

<style>

</style>