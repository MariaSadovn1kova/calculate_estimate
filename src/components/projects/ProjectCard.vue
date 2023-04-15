<template>
  <div class="card__container">
    <!-- <div class="status__mark unfinished">
      <img src="@/assets/logo/unfinished.svg">
    </div> -->
    <div class="status__mark finished">
      <img src="@/assets/logo/finished.svg">
    </div>
    <div class="card__info">
      <button class="xlsx__btn">
        <div>XLSX</div>
        <img src="@/assets/logo/dawnload.svg">
      </button>
      <div class="project__data">12.01.2023</div>
      <div class="project__customer">Иванов Иван Иванович</div>
      <div class="project__address">ул. Некрасова 30</div>
    </div>
    <div class="card__btns">
      <button>
        <img src="@/assets/logo/delete.svg">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {name: "project-card" };
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
    width: 3rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 1.5rem 0.6rem;
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
        margin-left: 0.3rem;
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
    padding: 1.2rem 1rem;
    margin-left: auto;

    button{
      background-color: #fff;
      border: 1px solid #FFADAD;
      padding: 0.4rem;
      border-radius: 0.4rem;
      transition: 0.5s;
    }
    button:hover{
      cursor: pointer;
      background-color: #fce7e7;
    }
  }
}
.card__container:hover{
  box-shadow: 0px 0px 10px #ccd1d1;
}
</style>