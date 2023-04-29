<template>
<div class="container">
  <div class="tab__container">
    <div v-for="tab in project_store.tabs" :key="tab.name" class="tab" :class = "{'active' :tab.name == project_store.activeTab}" @click="project_store.setActiveTab(tab.name)">
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
    <div class="content__container" v-if="navbar_store.active == 'Фундамент'">
      <div class="left__container">
        <div class="type__container">
          <div class="type__button" v-for="item in project_store.foundation__imgs[0].imgs" :key="item.id" :class = "{'active' :item.id == project_store.active_foundation}" @click="project_store.setActiveFoundation(item.id)">
            <img :src="project_store.foundation__active__imgs[item.id - 1].name" v-if="item.id == project_store.active_foundation">
            <img :src="item.name" v-else>
          </div>
        </div>
        <div class="type__container">
          <div class="type__button" v-for="item in project_store.foundation__imgs[1].imgs" :key="item.id" :class = "{'active' :item.id == project_store.active_foundation}" @click="project_store.setActiveFoundation(item.id)">
            <img :src="project_store.foundation__active__imgs[item.id - 1].name" v-if="item.id == project_store.active_foundation">
            <img :src="item.name" v-else>
          </div>
        </div>
        <custom-input v-for="item in project_store.foundation_inputs_items[0].standard_fields" :key="item.name" class="custom__input" :title="item.name"/>
      </div>
      <div class="right__container">
        <div class="inputs__header">Опалубка</div>
        <custom-input v-for="item in project_store.foundation_inputs_items[1].board_fields" :key="item.name" class="custom__input" :title="item.name"/>
        <div class="inputs__header reinforcement">Арматура</div>
        <custom-input v-for="item in project_store.foundation_inputs_items[2].reinforcement_fields" :key="item.name" class="custom__input" :title="item.name"/>
        <div class="btn__container">
          <sub-btn class="reset">Сбросить</sub-btn>
          <main-btn class="calculate">Рассчитать</main-btn>
        </div>
      </div>
    </div>
    <div class="content__container" v-if="navbar_store.active == 'Коробка'">
      <div class="left__container">
        <div>1 этаж</div>
        <custom-input v-for="item in project_store.box_inputs[0].standard_fields" :key="item.name" class="custom__input" :title="item.name"/>
        <div>Добавить этаж</div>
      </div>
      <div class="right__container">

      </div>
    </div>
    <div class="content__container" v-if="navbar_store.active == 'Крыша'">
      <div class="left__container"> 
        <div class="type__container">
          <div class="type__button" v-for="item in project_store.roof__imgs" :key="item.id" :class = "{'active' :item.id == project_store.active_roof}" @click="project_store.setActiveRoof(item.id)">
            <img :src="project_store.roof__active__imgs[item.id - 1].name" v-if="item.id == project_store.active_roof">
            <img :src="item.name" v-else>
          </div>
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

  const project_store =  useCreateProjectStore();
  const navbar_store = useLocalNavbarStore();
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
            height: 100%;
            .custom__input{
                margin-bottom: 1.5rem;
            }
            .type__container{
              display: flex;
              margin-bottom: 1.5rem;
              .type__button{
                background-color: #FFF7F5;
                border: 1px solid #FF594B;
                padding: 1.2rem;
                width: 6rem;
                height: 6rem;
                border-radius: 0.5rem;
                margin-right: 1.5rem;
                transition: 0.2s;
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
            display: flex;
            flex-direction: column;
            padding-left: 4rem;
            div{
                width: 100%;
                display: flex;
                .sub__button{
                    margin-top: 2.2rem;
                    margin-left: auto;
                }
            }
            .custom__input{
                margin-bottom: 1.5rem;
              }
            .inputs__header{
              color: #77AF68;
              font-weight: 500;
              padding-bottom: 1rem;
              border-bottom: 1px solid #77AF68;
              margin-bottom: 2rem;
              &.reinforcement{
                margin-top: 2rem;
              }
            }
          .btn__container{
            margin-top: 4.5rem;
            display: flex;
          .reset{
              margin-left: auto;
              margin-right: 0.5rem;
            }
          }
        }
    }
}
</style>