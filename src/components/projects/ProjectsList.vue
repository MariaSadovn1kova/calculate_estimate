<template>
  <div class="list__container">
    <project-card v-for="project in projects" :key="project.id" :project = 'project'/>
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
const projects = projects_list_store.projects;

</script>

<style>

</style>