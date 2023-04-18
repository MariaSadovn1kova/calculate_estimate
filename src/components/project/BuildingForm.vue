<template>
<div class="container">
  <div class="tab__container">
    <div class="tab">
      Здание 1
    </div>
    <div class="tab active">
      Здание 2
    </div>
    <div class="add__tab">
      +
    </div>
  </div>
  <div class="building__container">
    <local-navbar :navbar_items = 'navbar_store.buildings_items'  :default_active = 'navbar_store.buildings_items[0].name'>
      <button class="delete">
        <img src="@/assets/logo/delete.svg">
      </button>
    </local-navbar>
    <div class="content__container" v-if="navbar_store.active == 'Общая информация'">
        <div class="left__container">
            <custom-input v-for="item in inputs_items" :key="item.name" class="custom__input" :title="item.name"/>
        </div>
        <div class="right__container">
            <custom-textarea :title="'Комментарий'"/>
            <div>
                <sub-btn class="sub__button">Очистить</sub-btn>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
  export default {name: "building-form" };
</script>

<script setup lang="ts">
  import { useLocalNavbarStore } from "@/store/local-navbar_store";
  import { useCreateProjectStore } from "@/store/create-project_store";

  const create_project_store =  useCreateProjectStore();
  const navbar_store = useLocalNavbarStore();
  const inputs_items = [
    { name: "Тип здания" },
    { name: "Количество этажей" },
    { name: "Материал" },
    { name: "Наличие крыльца" },
  ]
</script>

<style lang="scss" scoped>
.container{
  background-color: #f3f8f1;
  box-shadow: 0px 0px 10px #e1e6e6;  
  border-radius: 0.5rem;
}
.tab__container{
  display: flex;
  .tab{
    background-color: #f3f8f1;
    width: 10%;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem 0.5rem 0 0;
    font-weight: 500;
  }
  .tab.active{
    background-color: #fff;
    color: #77AF68;
  }
  .add__tab{
    padding: 1rem;
    margin-left: auto;
  }
}
.tab:hover{
  cursor: pointer;
}
.building__container{
    width: 100%;
    background-color: #fff;
    padding: 3rem 4rem;
    margin-bottom: 5rem;
    border-radius: 0 0 1rem 1rem;
    .delete{
      background-color: #fff;
      padding: 0.35rem;
      border-radius: 0.4rem;
      transition: 0.5s;
      border: 1px solid #FFADAD;
    }
    .delete:hover{
      cursor: pointer;
      background-color: #fce7e7;
    }
    .content__container{
        display: flex;
        .left__container{
            width: 50%;
            padding: 0 15% 0 0;
            .custom__input{
                margin-bottom: 1.5rem;
            }
        }
        .right__container{
            width: 50%;
            div{
                width: 100%;
                display: flex;
                .sub__button{
                    margin-top: 2.2rem;
                    margin-left: auto;
                }
            }
        }
    }
}
</style>