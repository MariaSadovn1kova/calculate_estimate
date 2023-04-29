<template>
  <div class="card__container">
    <div class="card__name">{{ props.title }}</div>
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>


<script lang="ts">
    export default { name: "formula-card" };
</script>
<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    title: String
  })
</script>


<style lang="scss" scoped>
.card__container{
    width: 30%;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0.5rem;
    padding: 2rem;
    color: #4A4F48;
    display: flex;
    flex-direction: column;
    .card__name{
        font-size: 1.1rem;
        text-align: center;
        font-weight: 500;
    }
    .content{
        margin-top: 1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>