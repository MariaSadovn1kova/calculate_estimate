<template>
  <div class="card__container">
    <div class="status__mark">
      <img src="@/assets/logo/unfinished.svg">
    </div>
    <div class="card__info">
Инфа
    </div>
    <div class="card__btns">
КНопки
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "project-card" };
</script>

<style lang="scss" scoped>
.card__container{
  margin-bottom: 1rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px #e1e6e6;
  height: 5rem;
  border-radius: 0.5rem;
  display: flex;

  .status__mark{
    background-color: #FFDAD1;
    width: 3rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 1.5rem 0.6rem;
  }
  .card__info{
    width: 100%;
  }
  .card__btns{
    color: black;
    height: 100%;
    padding: 1rem;
  }
}
</style>