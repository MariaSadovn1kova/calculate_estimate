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
        <img v-else src="@/assets/img/materials/other.svg">        
    </div>
    <div class="material__count"> {{ material.Quantity }} {{material.UnitOfMeasurement}}</div>
    <div class="material__price">{{ Intl.NumberFormat('ru-RU').format(material.DeclaredValue) }} рублей</div>
    <div class="btn__container">
        <sub-btn class="sub__button" @click="deleteMaterial(material.ID)">Удалить</sub-btn>
        <main-btn class="open__material"  @click.stop="modal_store.setShow(), modal_store.setMaterial(material)">Открыть</main-btn>
    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "material-card" };
</script>
<script setup lang="ts">
  import { useModalStore } from "@/store/modal_store";
  import { defineProps } from 'vue';
  import { useMaterialStore } from "@/store/materials_store"
  const material_store = useMaterialStore()

  const modal_store = useModalStore();
  const props = defineProps({
    material: Object
  })

  function deleteMaterial(ID: number){
    material_store.deleteMaterial(ID)
  }
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