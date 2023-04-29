<template>
  <button class="btn-container">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  export default { name: "main-btn" };
</script>

<style lang="scss" scoped>
.btn-container{
    background-color: #77AF68;
    border: none;
    color: #fff;
    font-weight: 600;
    padding: 0.8em 1rem;
    border-radius: 0.5rem;
    transition: 0.3s;
}
.btn-container:hover{
    cursor: pointer;
    background-color: #649258;
}
</style>