<template>
  <div>
    <div class="header">
      <div class="header__title">
        Создать новый проект
      </div>
      <button class="xlsx__btn" v-if="sidebar_store.active == 'Смета'">
          <div>XLSX</div>
          <img src="@/assets/logo/dawnload.svg">
      </button>
      <router-link to="/create">
        <main-btn>
          <div class="btn__content">
            <div class="btn__text">Сохранить</div>
          </div>
        </main-btn>
      </router-link>
    </div>
    <div v-if="sidebar_store.active == 'Здания и заказчик'">
      <customer-form/>
      <building-form/>
    </div>
    <div v-if="sidebar_store.active == 'Смета'">
      <project-estimate/>
    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "create-project" };
</script>

<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";

  const sidebar_store = useSidebarStore();
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    .header__title{
      font-weight: 500;
      font-size: 1.1rem;
      color: #4A4F48;
    }
    .btn__content{
      display: flex;
    }
    .xlsx__btn{
      border-radius: 0.5rem;
      border: none;
      background-color: #F3F8F1;
      display: flex;
      color: #7FAF68;
      font-weight: 600;
      padding: 0 0.8rem 0 1rem;
      transition: 0.2s;
      margin-left: auto;
      margin-right: 1rem;
      border: 1px solid #7FAF68;
      div{
        margin-top: 0.7rem;
      }
      img{
        margin-top: 0.3rem;
        margin-left: 0.4rem;
      }
    }
    .xlsx__btn:hover{
      cursor: pointer;
      background-color: #d5f0cb;
    }
  }
</style>