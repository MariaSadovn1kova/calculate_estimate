<template>
  <div class="container">
    <div class="tab__container">
      <div v-for="tab in project_store.tabs" :key="tab.name" class="tab" :class = "{'active' :tab.name == project_store.activeTab}" @click="project_store.setActiveTab(tab.name)">
        {{ tab.name }}
      </div>
    </div>
    <div class="material-form__container">
      <local-navbar :navbar_items = "navbar_store.material_form_items" :default_active = "navbar_store.material_form_items[0].name"/>

      <div v-if="navbar_store.active == 'Арматура'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Арматура - Фундамент</span>
            <span class="material__count"> {{ project_store.estimateReinforcement }} кг</span>
          </div>
          <div class="building__material">
            <span class="name">Арматура - Коробка</span>
            <span class="material__count"> {{ project_store.estimateFloorReinforcement }} кг</span>
          </div>
          <div class="counts">
            <div class="total__count">
              Всего требуется: <span>{{ project_store.estimateReinforcement +  project_store.estimateFloorReinforcement }}</span>
            </div>
            <div class="total__count">
              Назначено: <span>{{ 3 }}</span>
            </div>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataReinforcement" :key="item.ID" :material ="item" class="card" :max_size = "project_store.estimateReinforcement +  project_store.estimateFloorReinforcement"/>
        </div>
      </div>

      <div v-if="navbar_store.active == 'Доска'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Доска - Фундамент</span>
            <span class="material__count"> {{ project_store.estimateBoard }} м</span>
          </div>
          <div class="building__material">
            <span class="name">Доска - Крыша</span>
            <span class="material__count"> {{ project_store.estimateRoofBoard }} м</span>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataBoard" :key="item.ID" :material ="item" class="card" :max_size = "project_store.estimateBoard +  project_store.estimateRoofBoard"/>
        </div>
      </div>

      <div v-if="navbar_store.active == 'Бетон'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Бетон</span>
            <span class="material__count"> {{ project_store.estimateConcrete }} кг</span>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataConcrete" :key="item.ID" :material ="item" class="card"/>
        </div>
      </div>

      <div v-if="navbar_store.active == 'Блок'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Блок</span>
            <span class="material__count"> {{ project_store.estimateBlock }} шт</span>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataBlock" :key="item.ID" :material ="item" class="card"/>
        </div>
      </div>

      <div v-if="navbar_store.active == 'Брус'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Брус - Коробка</span>
            <span class="material__count"> {{ project_store.estimateBeam }} м</span>
          </div>
          <div class="building__material">
            <span class="name">Брус - Крыша</span>
            <span class="material__count"> {{ project_store.estimateRoofBeam }} м</span>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataBeam" :key="item.ID" :material ="item" class="card"/>
        </div>
      </div>

      <div v-if="navbar_store.active == 'Кирпич'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Кирпич</span>
            <span class="material__count"> {{ project_store.estimateBrick }} шт</span>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataBrick" :key="item.ID" :material ="item" class="card"/>
        </div>
      </div>

      <div v-if="navbar_store.active == 'Кровельный материал'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Кровельный материал</span>
            <span class="material__count"> {{ project_store.estimateRoofingMaterial }} м</span>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataBrick" :key="item.ID" :material ="item" class="card"/>
        </div>
      </div>

      <div v-if="navbar_store.active == 'Карнизная система'">
        <div class="material__container">
          <div class="building__material">
            <span class="name">Карнизная система</span>
            <span class="material__count"> {{ project_store.estimateEaves }} м</span>
          </div>
        </div>
        <div class="title">Доступные материалы:</div>
        <div class="card__container">
          <estimate_material-card v-for="item in material_store.dataOther" :key="item.ID" :material ="item" class="card"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "material-form" };
</script>

<script setup lang="ts">
  import { useLocalNavbarStore } from "@/store/local-navbar_store";
  import { useCreateProjectStore } from "@/store/create-project_store";
  import { useMaterialStore } from "@/store/materials_store"
  import { onBeforeMount } from 'vue';

  const project_store =  useCreateProjectStore();
  const navbar_store = useLocalNavbarStore();
  const material_store = useMaterialStore()

  onBeforeMount(async () => {
    material_store.fetchMaterials()
  })
</script>


<style lang="scss" scoped>
.material__container{
  display: flex;
  margin-bottom: 2rem;
  .building__material{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 24%;
    border: 1px solid #77AF68;
    border-radius: 0.3rem;
    hyphens: auto;
    margin-right: 2rem;
    .name{
      color: #77AF68;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .material__count{
      width: 100%;
      text-align: center;
      font-size: 1.6rem;
      color: #4A4F48;
      margin-bottom: 2rem;
    }
  }
  .counts{
    display: flex;
    flex-direction: column;
    .total__count{
      font-size: 1.1rem;
      color: #4A4F48;
    }
    span{
      color: #77AF68;
      font-weight: 600;
    }
  }
}
.card__container{
  display: flex;
  .card{
    margin-right: 1rem;
  }
  }
.title{
  color: #4A4F48;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.tab__container{
  display: flex;  
  .tab{
    background-color: #e6eee6;
    width: 10%;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem 0.5rem 0 0;
    font-weight: 600;
    color: #4A4F48;
  }
  .tab.active{
    background-color: #fff;
    color: #77AF68;
    box-shadow: 0px -5px 10px #e1e6e6;  
  }
  .add__tab{
    padding: 1rem;
    margin-left: auto;
    background: none;
    border: none;
    transition: 0.3s;
    border-radius:  0.3rem 0.3rem 0 0;
  }
  .add__tab:hover{
    cursor: pointer;
    background-color: #e7f1e7;
  }
}
.tab:hover{
  cursor: pointer;
}
.material-form__container{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 2rem 4rem;
}
</style>