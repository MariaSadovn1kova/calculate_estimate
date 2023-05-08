<template>
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

<style lang="scss" scoped>

</style>