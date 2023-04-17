<template>
  <div class="customer__container">
    <div class="header">
        Заполните данные о заказчике
    </div>
    <div class="content__container">
        <div class="left__container">
            <custom-input class="custom__input" :title="'ФИО'"/>
            <custom-input class="custom__input" :title="'Адрес'"/>
            <custom-input class="custom__input" :title="'Телефонный номер'"/>
            <custom-input class="custom__input" :title="'Электронная почта'"/>
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

<style lang="scss" scoped>
.customer__container{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0.5rem;
    padding: 3rem 4rem;
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