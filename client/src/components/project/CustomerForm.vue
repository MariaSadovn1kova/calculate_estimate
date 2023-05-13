<template>
  <div class="customer__container">
    <div class="header">
        Информация о заказчике
    </div>
    <div class="content__container">
        <div class="left__container">
            <div class="input__container">
                <label for="my-input" class="label">ФИО</label>
                <input class="my-input" type="text" v-model="project_store.customerFullName">
            </div>
            <div class="input__container">
                <label for="my-input" class="label">Адрес</label>
                <input class="my-input" type="text" v-model="project_store.address">
            </div>
            <div class="input__container">
                <label for="my-input" class="label">Телефонный номер</label>
                <input class="my-input" type="text" v-model="project_store.phoneNumber">
            </div>
            <div class="input__container">
                <label for="my-input" class="label">Электронная почта</label>
                <input class="my-input" type="text" v-model="project_store.email">
            </div>
        </div>
        <div class="right__container">
            <div class="input__container">
                <label for="my-input" class="label">Дата</label>
                <input class="my-input" type="date" v-model="project_store.date">
            </div>
            <div class="input__container">
                <label for="my-input" class="label">Составитель проекта</label>
                <input class="my-input" type="text" v-model="project_store.compiler">
            </div>
            <div class="input__container">
                <label for="my-textarea" class="label">Комментарий</label>
                <textarea class="my-textarea" type="text" v-model="project_store.comment"></textarea>
            </div>
            <div>
                <sub-btn class="sub__button" @click="reset()">Сбросить</sub-btn>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "customer-form" };
</script>
<script setup lang="ts">
    import { useCreateProjectStore } from "@/store/create-project_store";

    const project_store = useCreateProjectStore();

    function reset(){
        project_store.customerFullName = ""
        project_store.address = ""
        project_store.phoneNumber = ""
        project_store.email = ""
        project_store.date = ""
        project_store.comment = ""
        project_store.compiler = ""
    }
</script>

<style lang="scss" scoped>
.customer__container{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0.5rem;
    padding: 3rem 4rem;
    margin-bottom: 4rem;
    .my-textarea{
        background-color: #FBFFFA;
        border: 1px solid #77AF68;
        border-radius: 0.3rem;
        padding: 0.5rem;
        outline: none;
        margin-top: 0.2rem;
        height: 6.5rem;
    }
    .header{
        color: #4A4F48;
        margin-bottom: 1rem;
    }
    .content__container{
        .input__container{
            display: flex;
            flex-direction: column;
            margin: 1rem 0 0.5rem 0;
            .my-input{
                background-color: #FBFFFA;
                border: 1px solid #77AF68;
                border-radius: 0.3rem;
                padding: 0.5rem;
                outline: none;
                margin-top: 0.2rem;
            }
            .label{
                color: #868585;
            }
        }
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
            margin-left: 12rem;
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