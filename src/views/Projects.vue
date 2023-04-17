<template>
  <div class="projects__container">
    <div class="header">
      <div class="header__title">
        Проекты за {{ sidebar_store.active }} год
      </div>
      <router-link to="/create">
        <main-btn>
          <div class="btn__content">
            <img src="@/assets/logo/plus.svg" class="btn__img">
            <div class="btn__text">Новый проект</div>
          </div>
        </main-btn>
      </router-link>
    </div>
    <local-navbar/>
    <input type="text" class="custom__input" placeholder="ФИО заказчика...">
    <projects-list/>
    <modal-window/>
  </div>
</template>

<script lang="ts">
  export default { name: "main-projects" };
</script>

<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";

  const sidebar_store = useSidebarStore();
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
  .custom__input{
    margin-bottom: 2rem;
    width: 40rem;
    height: 2.5rem;
    border-radius: 0.4rem;
    padding: 1rem;
    border: 1px solid #E4E7E6;
    outline: none;
  }
}
</style>