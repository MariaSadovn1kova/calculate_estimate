<template>
  <div class="card__container">
    <div v-if="project.Status == 'unfinished'" class="status__mark unfinished">
      <img src="@/assets/logo/unfinished.svg">
    </div>
    <div v-if="project.Status == 'finished'" class="status__mark finished">
      <img src="@/assets/logo/finished.svg">
    </div>
    <div class="card__info">
      <button class="xlsx__btn">
        <div>XLSX</div>
        <img src="@/assets/logo/dawnload.svg">
      </button>
      <div class="project__data">{{ project.Date.slice(0,10) }}</div>
      <div class="project__customer">{{ project.СustomerFullName }}</div>
      <div class="project__address">{{ project.Address }}</div>
    </div>
    <div class="card__btns">
      <router-link :to="'/project/' + project.ID">
        <button class="edit" @click="projectsStore.setProject(project)"> 
          <img src="@/assets/logo/edit.svg">
        </button>
      </router-link>
      <button class="delete" @click.stop="modal_store.setShow(), modal_store.setProject(project)" >
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
  import { useModalStore } from "@/store/modal_store";
  import { useProjectsStore } from "@/store/projects_store";

  const projectsStore = useProjectsStore();
  const modal_store = useModalStore();
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
    padding: 1.4rem 0.2rem;
    &.finished{
      background-color: #D6F3CC;
      border: 3px solid #ffffff;  
    }
    &.unfinished{
      background-color: #FFDAD1;
      border: 3px solid #ffffff; 
    }
  }
  .card__info{
    width: 70%;
    display: flex;
    padding: 1rem 4rem;
    justify-content: space-between;
    color: #4A4F48;
    font-weight: 500;
    cursor:default;
    .xlsx__btn{
      height: 3rem;
      border-radius: 0.5rem;
      border: none;
      background-color: #e4f7dd;
      display: flex;
      color: #7FAF68;
      font-weight: 600;
      padding: 0 0.8rem 0 1rem;
      transition: 0.2s;
      div{
        margin-top: 1rem;
      }
      img{
        margin-top: 0.6rem;
        margin-left: 0.4rem;
      }
    }
    .xlsx__btn:hover{
      cursor: pointer;
      background-color: #d5f0cb;
    }
    .project__data{
      width: 30%;
      padding-top: 0.9rem;
      text-align: center;
    }
    .project__customer{
      width: 30%;
      padding-top: 0.9rem;
      text-align: center;
    }
    .project__address{
      width: 30%;
      padding-top: 0.9rem;
      text-align: center;
    }
  }
  .card__btns{
    color: black;
    height: 100%;
    padding: 1.2rem 3rem;
    margin-left: auto;

    button{
      background-color: #fff;
      padding: 0.35rem;
      border-radius: 0.4rem;
      transition: 0.5s;
    }
    button.edit{
      border: 1px solid #7FAF68;
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