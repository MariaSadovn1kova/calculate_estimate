<template>
  <div class="card__container">
    <!-- <div class="status__mark unfinished">
      <img src="@/assets/logo/unfinished.svg">
    </div> -->
    <div class="status__mark finished">
      <img src="@/assets/logo/finished.svg">
    </div>
    <div class="card__info">
      Инфа
    </div>
    <div class="card__btns">
      <button>
        <img src="@/assets/logo/delete.svg">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "project-card" };
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
    width: 100%;
  }
  .card__btns{
    color: black;
    height: 100%;
    padding: 1.2rem 1rem;

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