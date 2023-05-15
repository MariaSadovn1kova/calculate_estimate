<template>
  <div class="material-card__container">
    <div class="material__title">{{ material.Name }}</div>
    <div class="img__container">
        <img v-if="material.Type == 'Арматура'" src="@/assets/img/materials/reinforcement.svg">
        <img v-else-if="material.Type == 'Кирпич'" src="@/assets/img/materials/brick.svg">
        <img v-else-if="material.Type == 'Доска'" src="@/assets/img/materials/construction_board.svg">
        <img v-else-if="material.Type == 'Бетон'" src="@/assets/img/materials/concrete.svg">
        <img v-else-if="material.Type == 'Блок'" src="@/assets/img/materials/block.svg"> 
        <img v-else-if="material.Type == 'Брус'" src="@/assets/img/materials/beam.svg">   
        <img v-else-if="material.Type == 'Кровельный материал'" src="@/assets/img/materials/roof_material.svg">   
        <img v-else src="@/assets/img/materials/other.svg">        
    </div>
    <div class="material__count"> {{ material.Quantity }} {{material.UnitOfMeasurement}}</div>
    <div class="material__price">{{ Intl.NumberFormat('ru-RU').format(material.DeclaredValue) }} рублей</div>
    <div class="input__container">
      <label for="my-input" class="label">Количество</label>
      <input class="my-input" type="number" :max="max_size">
      <main-btn class="appoint__material">Назначить</main-btn>
    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "estimate_material-card" };
</script>
<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    material: Object,
    max_size: Number
  })
</script>
<style lang="scss" scoped>
.material-card__container{
  width: 18%;
  background-color: #fff;
  box-shadow: 0px 0px 10px #e1e6e6;
  border-radius: 0.5rem;
  padding: 2rem;
  color: #4A4F48;
  display: flex;
  flex-direction: column;
  &:hover{
    box-shadow: 0px 0px 10px #ccd1d1;
  }
  .material__title{
        text-align: center;
        font-size: 1.1rem;
    }
    .img__container{
        margin-top: 2rem;
        display: flex;
        height: 5rem;
        justify-content: center;
        img{
            width: 10rem;
        }
    }
    .material__count{
        margin-top: 2rem;
        text-align: center;
        font-size: 1.1rem;
    }
    .material__price{
        margin-top: 1rem;
        text-align: center;
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }
  .input__container{
    display: flex;
    flex-direction: column;
    height: 100%;
    .my-input{
      background-color: #FBFFFA;
      border: 1px solid #77AF68;
      border-radius: 0.3rem;
      padding: 0.5rem;
      outline: none;
      margin-top: 0.2rem;
      margin-bottom: 1.5rem;
    }
    .label{
        color: #868585;
    }
  }

  .appoint__material{
    margin-top: auto;
  }
}
</style>