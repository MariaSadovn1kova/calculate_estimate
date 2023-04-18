<template>
<div class="container">
  <div class="tab__container">
    <div v-for="tab in tabs" :key="tab.name" class="tab" :class = "{'active' :tab.name == activeTab}" @click="setActiveTab(tab.name)">
      {{ tab.name }}
    </div>
    <button class="add__tab">
      <img src="@/assets/logo/plus_dark.svg">
    </button>
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
                <sub-btn class="sub__button">Сбросить</sub-btn>
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
  import { ref } from "vue";

  const create_project_store =  useCreateProjectStore();
  const navbar_store = useLocalNavbarStore();
  const inputs_items = [
    { name: "Тип здания" },
    { name: "Количество этажей" },
    { name: "Материал" },
    { name: "Наличие крыльца" },
  ]
  const tabs = [
    { name: "Здание 1" },
    { name: "Здание 2" },
  ]
  const activeTab = ref(tabs[0].name)
  
  function setActiveTab( newActive: any){
    activeTab.value = newActive
  }
</script>

<style lang="scss" scoped>
.container{
  background-color: #f3f8f1; 
  border-radius: 0.5rem;
}
.tab__container{
  display: flex;  
  .tab{
    background-color: #e6eee6;
    width: 10%;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem 0.5rem 0 0;
    font-weight: 600;
    color: #5f5e5e;
  }
  .tab.active{
    background-color: #fff;
    color: #77AF68;
    box-shadow: 0px -5px 10px #e1e6e6;  
  }
  .add__tab{
    padding: 1rem;
    margin-left: auto;
    background: none;
    border: none;
    transition: 0.3s;
    border-radius:  0.3rem 0.3rem 0 0;
  }
  .add__tab:hover{
    cursor: pointer;
    background-color: #e7f1e7;
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
    transition: 0.3s;
    box-shadow: 0px 0px 10px #e1e6e6;
    .delete{
      background-color: #fff;
      padding: 0.35rem;
      border-radius: 0.4rem;
      transition: 0.5s;
      border: none;
      margin-top: 0.5rem;
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