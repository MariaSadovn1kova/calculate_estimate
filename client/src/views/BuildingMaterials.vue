<template>
  <div class="materials__container">
    <div class="header">
      <div class="header__title">
        {{ sidebar_store.active }} 
      </div>
      <router-link to="/create">
        <main-btn>
          <div class="btn__content">
            <div class="btn__text">Создать материал</div>
          </div>
        </main-btn>
      </router-link>
    </div>
    <div class="material-cards__container">
      <div class="material-cards__row" v-if="sidebar_store.active == 'Арматура'">
        <material-card v-for="material in dataReinforcement" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Кирпич'">
        <material-card v-for="material in dataBrick" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Доска'">
        <material-card v-for="material in dataBoard" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Бетон'">
        <material-card v-for="material in dataConcrete" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Блок'">
        <material-card v-for="material in dataBlock" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Брус'">
        <material-card v-for="material in dataBeam" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else>
        <material-card v-for="material in dataOther" :key="material.id" :material = "material"/>
      </div>
    </div>
    <modal-window>
      <div class="material-modal__container">
        <local-navbar class="material__navbar" :navbar_items = 'navbar_store.material_items' :default_active = 'navbar_store.material_items[0].name'/>
        <div  class="content" v-if="navbar_store.active == 'Общая информация'">
          <div class="general-information__container">
            <div class="left">
              <div class="img__container">
                <img src="@/assets/img/materials/construction_board.svg">
              </div>
              <div class="count">Количество на складе: </div>
              <div class="count">Занято на проектах: </div>
            </div>
            <div class="right">
              <custom-input :title="'Количество'"/>
              <custom-input :title="'Цена'"/>
              <div class="btn__container">
                <main-btn class="save__material">Добавить</main-btn>
              </div>
              <custom-input :title="'Тип материала'"/>
              <custom-input :title="'Название'"/>
              <custom-input :title="'Объявленная стоимость'"/>
              <custom-input :title="'Единица измерения'"/>
              <div class="btn__container">                
                <sub-btn class="sub__button">Закрыть</sub-btn>
                <main-btn class="save__material">Сохранить</main-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="content" v-if="navbar_store.active == 'Проекты'">
          <div class="header">
            <div class="header__item" v-for="item in header_projects" :key="item.id" :class="{'last__item' : item.id == 1 || item.id == 3}">{{item.name}}</div>
          </div>
          <div class="table__row">
                <div class="row__item last__item">1</div>
                <div class="row__item">Доска 40*180*6м</div>
                <div class="row__item last__item">м3</div>
            </div>
        </div>
        <div class="content" v-if="navbar_store.active == 'История закупок'">
          <div class="header">
            <div class="header__item" v-for="item in purchase_projects" :key="item.id" :class="{'last__item' : item.id == 1 || item.id == 3}">{{item.name}}</div>
          </div>
          <div class="table__row">
                <div class="row__item last__item">1</div>
                <div class="row__item">Доска 40*180*6м</div>
                <div class="row__item last__item">м3</div>
            </div>
        </div>
      </div>
    </modal-window>
  </div>
</template>

<script lang="ts">
export default { name: "building-materials" };
</script>
<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";
  import { useLocalNavbarStore } from "@/store/local-navbar_store";
  import { useMaterialStore } from "@/store/materials_store"
  import { onBeforeMount, onUpdated, ref } from 'vue';

  const navbar_store = useLocalNavbarStore();
  const sidebar_store = useSidebarStore();
  const material_store = useMaterialStore();
  const dataReinforcement = ref()
  const dataBrick = ref()
  const dataBoard = ref()
  const dataConcrete = ref()
  const dataBlock = ref()
  const dataBeam = ref()
  const dataOther = ref()


  const header_projects = [
      { id: 1, name: "Адрес проекта" },
      { id: 2, name: "Заказчик" },
      { id: 3, name: "Количество" }
  ]
  const purchase_projects = [
      { id: 1, name: "Дата" },
      { id: 2, name: "Количество" },
      { id: 3, name: "Цена" }
  ]

  async function fetchMaterials() {
    dataReinforcement.value = await material_store.fetchReinforcement()
    dataBrick.value = await material_store.fetchBrick()
    dataBoard.value = await material_store.fetchBoard()
    dataConcrete.value = await material_store.fetchConcrete()
    dataBlock.value = await material_store.fetchBlock()
    dataBeam.value = await material_store.fetchBeam()
    dataOther.value = await material_store.fetchOther()
  }
  
  onBeforeMount(async () => {
    fetchMaterials()
  })

</script>

<style lang="scss" scoped>
.materials__container{
  .header{
    display: flex;
    justify-content: space-between;
    .header__title{
      font-size: 1.1rem;           
      color: #4A4F48;
      font-weight: 500;
    }
    .btn__content{
      display: flex;
      .btn__img{
        margin-right: 0.5rem;
      }
    }
  }

  .material-cards__container{
    margin: 2rem 0;
    .material-cards__row{
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
  }

  .material-modal__container{
    width: 60rem;
    height: 50rem;
    padding: 2rem 3rem;
    .material__navbar{
      margin-top: 0;
    }
    .header{
      background-color: #d5f0cb;
      display: flex;
      padding: 1rem;
      border-radius: 0.5rem 0.5rem 0 0;
      font-weight: 500;
      color: #4A4F48;
      .header__item{
          width: 50%;
          text-align: center;
          &.last__item{
            width: 25%;
          }
      }
    }
    .table__row{
      display: flex;
      height: 3rem;
      border: 2px solid #d5f0cb;
      background-color: #fff;
      margin-top: 0.5rem;
      display: flex;
      padding: 0.7rem 1rem;
      .row__item{
          width: 50%;
          text-align: center;
          &.last__item{
            width: 25%;
          }
      }
    }
    .content{
        height: 85%;
      }
    .general-information__container{
      display: flex;
      height: 100%;
      .left{
        width: 35%;
        .img__container{
          display: flex;
          border-radius: 0.5rem;
          padding: 5rem 1rem;
          justify-content: center;
        }
        .count{
          font-size: 1.1rem;
          margin-top: 2rem;
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        width: 65%;
        padding-left: 4rem;
        .btn__container{
          margin-top: auto;
          margin-left: auto;
          .sub__button{
            margin-right: 0.5rem;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>