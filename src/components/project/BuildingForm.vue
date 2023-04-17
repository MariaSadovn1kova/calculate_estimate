<template>
  <div class="building__container">
    <div class="header">
        Здание 1
    </div>
    <local-navbar :navbar_items = 'navbar_store.buildings_items'  :default_active = 'navbar_store.buildings_items[0].name'/>
    <div class="content__container" v-if="navbar_store.active == 'Общая информация'">
        <div class="left__container">
            <custom-input class="custom__input" :title="'Тип здания'"/>
            <custom-input class="custom__input" :title="'Количество этажей'"/>
            <custom-input class="custom__input" :title="'Материал'"/>
            <custom-input class="custom__input" :title="'Наличие крыльца'"/>
        </div>
        <div class="right__container">
            <custom-textarea :title="'Комментарий'"/>
            <div>
                <sub-btn class="sub__button">Очистить</sub-btn>
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

  const navbar_store = useLocalNavbarStore();
</script>

<style lang="scss" scoped>
.building__container{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0.5rem;
    padding: 3rem 4rem;
    margin-bottom: 5rem;
    .header{
        color: #525252;
        margin-bottom: 1rem;
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