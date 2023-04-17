<template>
  <div>
    <div class="header">
      <div class="header__title">
        Создать новый проект
      </div>
      <router-link to="/create">
        <main-btn>
          <div class="btn__content">
            <div class="btn__text">Сохранить</div>
          </div>
        </main-btn>
      </router-link>
    </div>
    <customer-form v-if="sidebar_store.active == 'Здания и заказчик'"/>
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
</style>