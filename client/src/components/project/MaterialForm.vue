<template>
    <div class="material-form__container">
        <local-navbar :navbar_items = "navbar_store.material_form_items" :default_active = "navbar_store.material_form_items[0].name"/>
    </div>
</template>

<script lang="ts">
  export default {name: "material-form" };
</script>

<script setup lang="ts">
  import { useLocalNavbarStore } from "@/store/local-navbar_store";
  import { useCreateProjectStore } from "@/store/create-project_store";

  const project_store =  useCreateProjectStore();
  const navbar_store = useLocalNavbarStore();
</script>


<style lang="scss" scoped>
.material-form__container{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0.5rem;
    padding: 2rem 4rem;
}
</style>