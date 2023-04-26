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
            <custom-input v-for="item in general_inputs_items" :key="item.name" class="custom__input" :title="item.name"/>
        </div>
        <div class="right__container">
            <custom-textarea :title="'Комментарий'"/>
            <div>
                <sub-btn class="sub__button">Сбросить</sub-btn>
            </div>
        </div>
    </div>
    <div class="content__container" v-if="navbar_store.active == 'Фундамент'">
      <div class="left__container">
        <div class="foundation-type__container">
          <div class="foundation-type__button" v-for="item in foundation__imgs_row1" :key="item.id" :class = "{'active' :item.id == active_foundation}" @click="setActiveFoundation(item.id)">
            <img :src="foundation__active[item.id - 1].name" v-if="item.id == active_foundation">
            <img :src="item.name" v-else>
          </div>
        </div>
        <div class="foundation-type__container">
          <div class="foundation-type__button" v-for="item in foundation__imgs_row2" :key="item.id" :class = "{'active' :item.id == active_foundation}" @click="setActiveFoundation(item.id)">
            <img :src="foundation__active[item.id - 1].name" v-if="item.id == active_foundation">
            <img :src="item.name" v-else>
          </div>
        </div>
      </div>
      <div class="right__container"></div>
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
  const general_inputs_items = [
    { name: "Тип здания" },
    { name: "Количество этажей" },
    { name: "1 этаж - материал" },
    { name: "Наличие крыльца" },
  ]
  const tabs = [
    { name: "Здание 1" },
    { name: "Здание 2" },
  ]
  const foundation__imgs_row1 = [
    { id: 1, name: require('@/assets/img/foundation/foundation_1_0.svg')},
    { id: 2, name: require('@/assets/img/foundation/foundation_2_0.svg')},
    { id: 3, name: require('@/assets/img/foundation/foundation_3_0.svg')},
    { id: 4, name: require('@/assets/img/foundation/foundation_4_0.svg')},
  ]
  const foundation__imgs_row2 = [
    { id: 5, name: require('@/assets/img/foundation/foundation_5_0.svg')},
    { id: 6, name: require('@/assets/img/foundation/foundation_6_0.svg')},
    { id: 7, name: require('@/assets/img/foundation/foundation_7_0.svg')},
  ]
  const foundation__active = [
    { id: 1, name: require('@/assets/img/foundation/foundation_1_1.svg')},
    { id: 2, name: require('@/assets/img/foundation/foundation_2_1.svg')},
    { id: 3, name: require('@/assets/img/foundation/foundation_3_1.svg')},
    { id: 4, name: require('@/assets/img/foundation/foundation_4_1.svg')},
    { id: 5, name: require('@/assets/img/foundation/foundation_5_1.svg')},
    { id: 6, name: require('@/assets/img/foundation/foundation_6_1.svg')},
    { id: 7, name: require('@/assets/img/foundation/foundation_7_1.svg')},
  ]
  const active_foundation = ref(1);
  const activeTab = ref(tabs[0].name)
  
  function setActiveTab( newActive: any){
    activeTab.value = newActive
  }
  function setActiveFoundation( newActive: any){
    active_foundation.value = newActive
  }
</script>

<style lang="scss" scoped>
.container{
  background-color: #F4F4F4; 
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
    color: #4A4F48;
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
            .foundation-type__container{
              display: flex;
              margin-bottom: 1.5rem;
              .foundation-type__button{
                background-color: #FFF7F5;
                border: 1px solid #FF594B;
                padding: 1.2rem;
                width: 6rem;
                height: 6rem;
                border-radius: 0.5rem;
                margin-right: 1.5rem;
                &:hover{
                  background-color: #ffede8;
                  cursor: pointer;
                }
                &.active{
                  background-color: #FF594B;
                }
              }
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