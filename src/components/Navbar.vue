<template>
  <div class="nav__container">
        <!-- <img class="company__logo" src="@/assets/company_logo.svg">                 -->
        <router-link class = "nav__link" :class = "{'active' :this.activePage=='projects'}" to="/projects" @click="setActive('projects')">Проекты</router-link>
        <router-link class = "nav__link" :class = "{'active' :this.activePage=='materials'}" to="/materials" @click="setActive('materials')">Строматериалы</router-link>
        <router-link class = "nav__link" :class = "{'active' :this.activePage=='formulas'}" to="/projects" @click="setActive('formulas')">Формулы</router-link>
        <div class="user__container">
            <div class="user__name">
                И. И. Иванов
            </div>
            <!-- <img class="user__img" src="@/assets/user__picture.svg" alt=""> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
let active = ''

@Options({
  name: 'main-navbar'
})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
 .nav__container{
        display: flex;
        flex-direction: row;
        background-color: #fff;
        box-shadow: 0px 4px 4px #DEE1E0;
        padding: 0rem 5rem 0rem 5rem;
        .company__logo{
            width: 4rem;
            margin-right: 11rem;
        }
        .nav__link{
            text-decoration: none;
            color: #868585;
            font-weight: 600;
            padding: 1rem;
        }
        .nav__link.active{
            text-decoration: none;
            font-weight: 600;
            padding: 1rem;
            color: #34CAA5;
            border-bottom: 3px solid #34CAA5;
        }
        .nav__link:hover{
            background-color: #E8F6F3;
            color: #34CAA5;
        }
        .user__container{
            display: flex;
            margin-left: auto;            
        }
        .user__name{
            font-weight: 600;
            color: #34CAA5;
            padding: 1rem;
        }
        .user__container:hover{
            background-color: #E8F6F3;
            cursor: pointer;
        }
        .user__img{
            width: 2rem;
            margin-right: 1rem;
        }
    }
</style>