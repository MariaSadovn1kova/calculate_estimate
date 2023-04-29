<template>
  <div class="formula__container" @click.stop="modal_store.setShow">
    <div class="title">{{ title }}</div>
    <div class="formula">3*Ширина*Выоста  </div>
  </div>
</template>

<script lang="ts">
    export default { name: "formula-block" };
</script>
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useModalStore } from "@/store/modal_store";

  const modal_store = useModalStore();
  const props = defineProps({
    title: String
  })
</script>

<style lang="scss" scoped>
.formula__container{
  border-radius: 0.5rem;
  height: 7rem;
  border: 2px solid #bee4b3;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 10px #bed4c4;
  }
  .title{
    color: #77AF68;
    font-weight: 600;
  }
  .formula{
    margin-top: 0.5rem;
  }
}
</style>