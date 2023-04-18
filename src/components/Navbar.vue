<template>
  <div class="nav__container">
        <img class="company__logo" src="@/assets/logo/company__logo.svg">                
        <router-link v-for="link in itemLinks" :key="link.name" class = "nav__link" active-class="active" :to="link.path">{{ link.name }}</router-link>
        <div class="user__container">
            <div class="user__name">
                И. И. Иванов
            </div>
            <img class="user__img" src="@/assets/logo/user.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts">
export default { name: "main-navbar" };
</script>

<script setup lang="ts">
const itemLinks = [
    { name: "Проекты", path: "/" },
    { name: "Стройматериалы", path: "/materials" },
    { name: "Формулы", path: "/formulas" }
]
</script>

<style scoped lang="scss">
 .nav__container{
        display: flex;
        flex-direction: row;
        background-color: #fff;
        box-shadow: 0px 4px 6px #e9ecec;
        padding: 0rem 5rem 0rem 5rem;
        height: 3.4rem;
        .company__logo{
            width: 4rem;
            margin-right: 11rem;
        }
        .nav__link{
            text-decoration: none;
            color: #5f5e5e;
            font-weight: 600;
            padding: 1rem; 
        }
        .nav__link.active{
            text-decoration: none;
            font-weight: 600;
            color: #77AF68;
            border-bottom: 3px solid #77AF68;
        }
        .nav__link:hover{
            background-color: #f4faf1;
            color: #77AF68;
        }
        .user__container{
            display: flex;
            margin-left: auto;            
        }
        .user__name{
            font-weight: 600;
            color: #77AF68;
            padding: 1rem;
        }
        .user__container:hover{
            background-color: #f3f8f1;
            cursor: pointer;
        }
        .user__img{
            width: 2rem;
            margin-right: 1rem;
        }
    }
</style>