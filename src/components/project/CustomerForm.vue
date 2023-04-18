<template>
  <div class="customer__container">
    <div class="header">
        Информация о заказчике
    </div>
    <div class="content__container">
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
</template>

<script lang="ts">
  export default {name: "customer-form" };
</script>
<script setup lang="ts">
    const inputs_items = [
        { name: "ФИО" },
        { name: "Адрес" },
        { name: "Телефонный номер" },
        { name: "Электронная почта" },
    ]
</script>

<style lang="scss" scoped>
.customer__container{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0.5rem;
    padding: 3rem 4rem;
    margin-bottom: 4rem;
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