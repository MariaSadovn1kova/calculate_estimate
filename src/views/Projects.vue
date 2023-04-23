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
    <local-navbar  :navbar_items = 'navbar_store.projects_items'  :default_active = 'navbar_store.projects_items[0].name'/>
    <input type="text" class="custom__input" placeholder="ФИО заказчика...">
    <projects-list/>
    <modal-window>
      <div class="modal__content">
        <div class="header">Удалить проект</div>
        <div class="modal__text">Вы уверены, что хотите удалить этот проект?</div>
        <div class="info">Заказчик:</div>
        <div class="info">Адрес:</div>
        <div class="info">Дата:</div>
        <div class="modal-btn__container">
          <sub-btn class="cancel__btn">Отмена</sub-btn>
          <main-btn class="delete__btn">Удалить</main-btn>
        </div>
      </div>
    </modal-window>
  </div>
</template>

<script lang="ts">
  export default {name: "main-projects" };
</script>

<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";
  import { useLocalNavbarStore } from "@/store/local-navbar_store";

  const navbar_store = useLocalNavbarStore();
  const sidebar_store = useSidebarStore();
</script>

<style lang="scss" scoped>
.projects__container{
  .header{
    display: flex;
    justify-content: space-between;
    .header__title{
      font-size: 1.1rem;           
      color: #4A4F48;
      font-weight: 500;
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
  .modal__content{
    display: flex;
    flex-direction: column;
    height: 100%;
    .header{
      font-size: 1.1rem;
      border-bottom: 1px solid #D9D9D9;
      padding-bottom: 1rem;
    }
    .modal__text{
      padding: 1.5rem 0;
    }
    .info{
      font-weight: 600;
      color: #77AF68;
      margin: 1rem 0;
    }
    .modal-btn__container{
      margin-top: 2rem;
      display: flex;
      .cancel__btn{
        margin-left: auto;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>