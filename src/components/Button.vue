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
    background-color: #F6FAF8;
    border: 1px solid #6BBF54;
    color: #6BBF54;
    font-weight: 600;
    padding: 0.8em 1rem;
    border-radius: 0.5rem;
    transition: 0.3s;
}
.btn-container:hover{
    cursor: pointer;
    background-color: #f3f8f1;
}
</style>