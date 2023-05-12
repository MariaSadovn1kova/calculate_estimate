<template>
  <div class="materials__container">
    <div class="header">
      <div class="header__title">
        {{ sidebar_store.active }} 
      </div>
        <main-btn @click="modal_store.setShow(), material_store.setModalContext('СоздатьМатериал')">
          <div class="btn__content">
            <div class="btn__text">Создать материал</div>
          </div>
        </main-btn>
    </div>
    <div class="material-cards__container">
      <div class="material-cards__row" v-if="sidebar_store.active == 'Арматура'">
        <material-card v-for="material in material_store.dataReinforcement" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Кирпич'">
        <material-card v-for="material in material_store.dataBrick" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Доска'">
        <material-card v-for="material in material_store.dataBoard" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Бетон'">
        <material-card v-for="material in material_store.dataConcrete" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Блок'">
        <material-card v-for="material in material_store.dataBlock" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else-if="sidebar_store.active == 'Брус'">
        <material-card v-for="material in material_store.dataBeam" :key="material.id" :material = "material"/>
      </div>
      <div class="material-cards__row" v-else>
        <material-card v-for="material in material_store.dataOther" :key="material.id" :material = "material"/>
      </div>
    </div>
    <modal-window>
      <div v-if="material_store.modalContext == 'Материал'">
        <div class="material-modal__container">
          <local-navbar class="material__navbar" :navbar_items = 'navbar_store.material_items' :default_active = 'navbar_store.material_items[0].name'/>
          <div  class="content" v-if="navbar_store.active == 'Общая информация'">
            <div class="general-information__container">
              <div class="left">
                <div class="img__container">
                  <img v-if="modal_store.material.Type == 'Арматура'" src="@/assets/img/materials/reinforcement.svg">
                  <img v-else-if="modal_store.material.Type == 'Кирпич'" src="@/assets/img/materials/brick.svg">
                  <img v-else-if="modal_store.material.Type == 'Доска'" src="@/assets/img/materials/construction_board.svg">
                  <img v-else-if="modal_store.material.Type == 'Бетон'" src="@/assets/img/materials/concrete.svg">
                  <img v-else-if="modal_store.material.Type == 'Блок'" src="@/assets/img/materials/block.svg"> 
                  <img v-else-if="modal_store.material.Type == 'Брус'" src="@/assets/img/materials/beam.svg">   
                  <img v-else src="@/assets/img/materials/other.svg">    
                </div>
                <div class="count__container">
                  <div class="count">Количество на складе: {{modal_store.material.Quantity}}</div>
                  <div class="count">Занято на проектах: </div>
                </div>
              </div>
              <div class="right">
                <div class="input__container">
                  <label for="my-input" class="label">Количество</label>
                  <input class="my-input" type="number" v-model="modal_store.materialQuantity">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Цена</label>
                  <input class="my-input" type="number" v-model="modal_store.materialPrice">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Дата</label>
                  <input class="my-input" type="date" v-model="modal_store.materialDate">
                </div>
                <div class="btn__container">
                  <sub-btn class="sub__button">Удалить</sub-btn>
                  <form @submit.prevent="createAccounting(modal_store.material.ID, modal_store.materialQuantity, 'Закупка', modal_store.materialDate, modal_store.materialPrice)">
                    <main-btn class="save__material">Добавить</main-btn>
                  </form>
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Тип материала</label>
                  <input class="my-input" type="text" v-model="modal_store.materialType">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Название</label>
                  <input class="my-input" type="text" v-model="modal_store.materialName">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Единица измерения</label>
                  <input class="my-input" type="text" v-model="modal_store.materialMeasurement">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Объявленная стоимость</label>
                  <input class="my-input" type="number" v-model="modal_store.materialCost">
                </div>
                <div class="btn__container">                
                  <sub-btn class="sub__button" @click.stop="modal_store.setShow()">Закрыть</sub-btn>
                  <form @submit.prevent="onUpdateMaterial(modal_store.materialType, modal_store.materialName, modal_store.materialMeasurement, modal_store.materialCost, modal_store.material.ID)">
                    <main-btn class="save__material">Сохранить</main-btn>
                  </form>
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
              <div class="header__item" v-for="item in purchase_projects" :key="item.id" :class="{'last__item' : item.id == 1 || item.id == 4}">{{item.name}}</div>
            </div>
            <div class="table__row" v-for="item in modal_store.accounting" :key = "item.ID">
                  <div class="row__item last__item">{{ item.OperationType }}</div>
                  <div class="row__item">{{ item.Date.slice(0,10)  }}</div>
                  <div class="row__item">{{ item.Quantity }}</div>
                  <div class="row__item last__item">{{ item.Price }}</div>
              </div>
          </div>
        </div>
        </div>
        <div v-if="material_store.modalContext == 'СоздатьМатериал'">
          <div class="material-modal__container">
            <div class="title">Создать новый стройматериал</div>
            <div class="general-information__container">
              <div class="left">
                <div class="img__container">
                  <img src="@/assets/img/materials/other.svg">    
                </div>
              </div>
              <div class="right">
                <div class="input__container">
                  <label for="my-input" class="label">Тип материала</label>
                  <input class="my-input" type="text" v-model="modal_store.createType">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Название</label>
                  <input class="my-input" type="text" v-model="modal_store.createName">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Единица измерения</label>
                  <input class="my-input" type="text" v-model="modal_store.createMeasurement">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Объявленная стоимость</label>
                  <input class="my-input" type="number" v-model="modal_store.createCost">
                </div>
                <div class="input__container">
                  <label for="my-input" class="label">Количество на складе</label>
                  <input class="my-input" type="number" v-model="modal_store.createQuantity">
                </div>
                <div class="btn__container"> 
                  <sub-btn class="sub__button" @click.stop="modal_store.setShow()">Закрыть</sub-btn>
                  <form @submit.prevent="onInsertMaterial(modal_store.createType, modal_store.createName, modal_store.createMeasurement, modal_store.createCost, modal_store.createQuantity), modal_store.setShow()">
                    <main-btn class="save__material">Сохранить</main-btn>
                  </form>
                </div>
              </div>
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
  import { useModalStore } from "@/store/modal_store";
  import { onBeforeMount, onUpdated, ref } from 'vue';

  const navbar_store = useLocalNavbarStore()
  const sidebar_store = useSidebarStore()
  const material_store = useMaterialStore()
  const modal_store = useModalStore();

  const header_projects = [
      { id: 1, name: "Адрес проекта" },
      { id: 2, name: "Заказчик" },
      { id: 3, name: "Количество" }
  ]
  const purchase_projects = [
      { id: 1, name: "Вид сделки" },
      { id: 2, name: "Дата" },
      { id: 3, name: "Количество" },
      { id: 4, name: "Цена" }
  ]
  
  async function onUpdateMaterial(Type: string, Name: string,  UnitOfMeasurement: string, DeclaredValue: number, ID: number){
    await material_store.updateMaterial(Type, Name, UnitOfMeasurement, DeclaredValue, ID)
    material_store.fetchMaterials()
  }
  async function createAccounting(BuildingMaterial_ID: number, Quantity: number, OperationType: string, Date: Date, Price: number){
    await modal_store.createAccounting(BuildingMaterial_ID, Quantity, OperationType, Date, Price) 
    await modal_store.updateMaterialPrice(BuildingMaterial_ID, Quantity + modal_store.material.Quantity)
  }
  async function onInsertMaterial(Type: string, Name: string,  UnitOfMeasurement: string, DeclaredValue: number, Quantity: number){
    await material_store.insertMaterial(Type, Name, UnitOfMeasurement, DeclaredValue, Quantity)
    material_store.fetchMaterials()
  }

  onBeforeMount(async () => {
    material_store.fetchMaterials()
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
  .input__container{
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0 0.5rem 0;
    .my-input{
        background-color: #FBFFFA;
        border: 1px solid #77AF68;
        border-radius: 0.3rem;
        padding: 0.5rem;
        outline: none;
        margin-top: 0.2rem;
    }
    .label{
        color: #868585;
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
    .title{
      font-size: 1.1rem;           
      color: #4A4F48;
      font-weight: 500;
      margin-bottom: 2rem;
    }
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
        display: flex;
        flex-direction: column;
        .img__container{
          display: flex;
          height: 8rem;
          margin-top: 2rem;
          justify-content: center;
          height: 20%;
        }
        .count__container{
          margin-top: 16rem;
          .count{
            font-size: 1.1rem;
            margin-top: 2rem;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        width: 65%;
        padding-left: 4rem;
        padding-bottom: 3rem;
        .btn__container{
          margin-top: auto;
          margin-left: auto;
          display: flex;
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