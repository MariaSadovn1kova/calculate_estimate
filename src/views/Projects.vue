<template>
  <div class="projects__container">
    <div class="header">
      <div class="header__title">
        Проекты за 2023 год
      </div>
      <main-btn>
        <div class="btn__content">
          <img src="@/assets/logo/plus.svg" class="btn__img">
          <div class="btn__text">Новый проект</div>
        </div>
      </main-btn>
    </div>
    <projects-list/>
  </div>
</template>

<script lang="ts">
export default { name: "main-projects" };
</script>

<style lang="scss" scoped>
.projects__container{
  .header{
    display: flex;
    justify-content: space-between;
    .header__title{
      font-size: 1.1rem;
      color: #525252;
    }
    .btn__content{
      display: flex;
      .btn__img{
        margin-right: 0.5rem;
      }
    }
  }
}
</style>