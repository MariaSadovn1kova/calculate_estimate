<template>
  <div class="card__container">
    <div v-if="project.status == 'unfinished'" class="status__mark unfinished">
      <img src="@/assets/logo/unfinished.svg">
    </div>
    <div v-if="project.status == 'finished'" class="status__mark finished">
      <img src="@/assets/logo/finished.svg">
    </div>
    <div class="card__info">
      <button class="xlsx__btn">
        <div>XLSX</div>
        <img src="@/assets/logo/dawnload.svg">
      </button>
      <div class="project__data">{{ project.date }}</div>
      <div class="project__customer">{{ project.customer }}</div>
      <div class="project__address">{{ project.address }}</div>
    </div>
    <div class="card__btns">
      <button class="edit">
        <img src="@/assets/logo/edit.svg">
      </button>
      <button class="delete">
        <img src="@/assets/logo/delete.svg">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {name: "project-card" };
</script>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
      project: Object
  })
</script>

<style lang="scss" scoped>
.card__container{
  margin-bottom: 1rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px #e1e6e6;
  height: 5rem;
  border-radius: 0.5rem;
  display: flex;
  transition: 0.5s;

  .status__mark{
    width: 2.5rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 1.5rem 0.4rem;
    &.finished{
      background-color: #CCF3E9;
    }
    &.unfinished{
      background-color: #FFDAD1;
    }
  }
  .card__info{
    width: 60%;
    display: flex;
    padding: 1rem 4rem;
    justify-content: space-between;
    color: #828282;
    font-weight: 500;
    .xlsx__btn{
      height: 3rem;
      border-radius: 0.5rem;
      border: none;
      background-color: #E8F6F3;
      display: flex;
      color: #34CAA5;
      font-weight: 600;
      padding: 0 0.8rem 0 1rem;
      transition: 0.2s;
      div{
        margin-top: 1rem;
      }
      img{
        margin-top: 0.7rem;
        margin-left: 0.4rem;
      }
    }
    .xlsx__btn:hover{
      cursor: pointer;
      background-color: #dcf3ee;
    }
    .project__data{
      padding-top: 0.9rem;
    }
    .project__customer{
      padding-top: 0.9rem;
    }
    .project__address{
      padding-top: 0.9rem;
    }
  }
  .card__btns{
    color: black;
    height: 100%;
    padding: 1.2rem 3rem;
    margin-left: auto;

    button{
      background-color: #fff;
      padding: 0.3rem;
      border-radius: 0.4rem;
      transition: 0.5s;
    }
    button.edit{
      border: 1px solid #6BBF54;
      margin-right: 0.6rem;
    }
    button.delete{
      border: 1px solid #FFADAD;
    }
    button.delete:hover{
      cursor: pointer;
      background-color: #fce7e7;
    }
    button.edit:hover{
      cursor: pointer;
      background-color: #e2f0dc;
    }
  }
}
.card__container:hover{
  box-shadow: 0px 0px 10px #ccd1d1;
}
</style>