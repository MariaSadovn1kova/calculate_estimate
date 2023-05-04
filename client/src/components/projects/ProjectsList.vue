<template>
  <transition-group name="project-list">
    <project-card v-for="project in data" :key="project.Id" :project = 'project'/>
  </transition-group>
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

<style lang="scss" scoped>
 .project-list-item{
    display: inline-block;
    margin-right: 10px;
  }
  .project-list-enter-active, .project-list-leave-active{
    transition: all 0.5s ease;
  }
  .project-list-enter-from, .project-list-leave-to{
    opacity: 0;
    transform: translateX(30px);
  }
  .project-list-move{
    transition: transform 0.4s ease;
  }
</style>