<template>
  <div class="material-card__container">
    <div class="material__title"> Название материала</div>
    <div class="img__container">
        <img src="@/assets/img/materials/construction_board.svg">
    </div>
    <div class="material__count"> Количество</div>
    <div class="material__price"> Цена материала</div>
    <div class="btn__container">
        <sub-btn class="sub__button">Удалить</sub-btn>
        <main-btn class="open__material"  @click.stop="modal_store.setShow">Открыть</main-btn>
    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "material-card" };
</script>
<script setup lang="ts">
  import { useModalStore } from "@/store/modal_store";

  const modal_store = useModalStore();
</script>

<style lang="scss" scoped>
.material-card__container{
    width: 18%;
    height: 25rem;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0.5rem;
    padding: 2rem;
    color: #4A4F48;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    
    .material__title{
        text-align: center;
        font-size: 1.1rem;
    }
    .img__container{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        img{
            width: 10rem;
        }
    }
    .material__count{
        margin-top: 2rem;
        text-align: center;
    }
    .material__price{
        margin-top: 1rem;
        text-align: center;
    }
    .btn__container{
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        .open__material{
            width: 49%;
        }
        .sub__button{
            width: 49%;
        }
    }
}
.material-card__container:hover{
    box-shadow: 0px 0px 10px #ccd1d1;
}

</style>