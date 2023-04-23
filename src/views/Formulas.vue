<template>
  <div class="formulas__container">
    <div class="foundation-formulas__container">
      <div class="board__formulas"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "formulas-for-calculation" };
</script>

<style lang="scss" scoped>
.formulas__container{
  .foundation-formulas__container{
    .board__formulas{
      background-color: #fff;
      height: 30rem;
      box-shadow: 0px 0px 10px #e1e6e6;
      border-radius: 0.5rem;
    }
  }
}
</style>