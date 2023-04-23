<template>
  <div class="materials__container">
    <div class="header">
      <div class="header__title">
        {{ sidebar_store.active }} 
      </div>
      <router-link to="/create">
        <main-btn>
          <div class="btn__content">
            <img src="@/assets/logo/plus.svg" class="btn__img">
            <div class="btn__text">Материал</div>
          </div>
        </main-btn>
      </router-link>
    </div>
    <div class="material-cards__container">
      <div class="material-cards__row">
        <material-card/>
        <material-card/>
        <material-card/>
        <material-card/>
        <material-card/>
      </div>
      <div class="material-cards__row">
        <material-card/>
        <material-card/>
        <material-card/>

      </div>
    </div>
    <modal-window>
      <div class="material-modal__container">
        <local-navbar class="material__navbar" :navbar_items = 'navbar_store.material_items' :default_active = 'navbar_store.material_items[0].name'/>
        <div class="general-information__container">
          <div class="left"></div>
          <div class="right">
            <custom-input/>
          </div>
        </div>
      </div>
    </modal-window>
  </div>
</template>

<script lang="ts">
export default { name: "building-materials" };
</script>
<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";
  import { useLocalNavbarStore } from "@/store/local-navbar_store";
  import MaterialCard from '@/components/materials/MaterialCard.vue';
  import LocalNavbar from '@/components/LocalNavbar.vue';

  const navbar_store = useLocalNavbarStore();
  const sidebar_store = useSidebarStore();
</script>

<style lang="scss" scoped>
.materials__container{
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

  .material-cards__container{
    margin: 2rem 0;
    .material-cards__row{
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
  }

  .material-modal__container{
    width: 60rem;
    height: 50rem;
    padding: 2rem 3rem;
    .material__navbar{
      margin-top: 0;
    }
    .general-information__container{
      display: flex;
      .left{
        width: 50%;
      }
      .right{
        width: 50%;
      }
    }
  }
}
</style>