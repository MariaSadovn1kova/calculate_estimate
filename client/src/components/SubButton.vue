<template>
    <button class="btn-container">
        <slot></slot>
    </button>
</template>

<script lang="ts">
  export default { name: "sub-btn" };
</script>

<style lang="scss" scoped>
.btn-container{
    background-color: #fff;
    border: 1px solid #FF594B;
    color: #FF594B;
    font-weight: 600;
    padding: 0.8em 1rem;
    border-radius: 0.5rem;
    transition: 0.3s;
}
.btn-container:hover{
    cursor: pointer;
    background-color: #FF594B;
    color: #fff;
}
</style>