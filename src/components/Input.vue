<template>
   <div class="input__container">
    <label for="my-input" class="label">{{ props.title }}</label>
    <input class="my-input" type="text">
  </div>
</template>

<script lang="ts">
    export default { name: "custom-input" };
</script>
<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    title: String
  })
</script>

<style lang="scss" scoped>
.input__container{
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0 0.5rem 0;
    .my-input{
        background-color: #FBFFFA;
        border: 1px solid #77AF68;
        border-radius: 0.3rem;
        padding: 0.5rem;
        outline: none;
        margin-top: 0.2rem;
    }
    .label{
        color: #868585;
    }
}
</style>