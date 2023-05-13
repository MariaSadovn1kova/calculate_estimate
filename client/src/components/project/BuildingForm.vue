<template>
<div class="container">
  <div class="tab__container">
    <div v-for="tab in project_store.tabs" :key="tab.name" class="tab" :class = "{'active' :tab.name == project_store.activeTab}" @click="project_store.setActiveTab(tab.name)">
      {{ tab.name }}
    </div>
    <button class="add__tab">
      <img src="@/assets/logo/plus_dark.svg">
    </button>
  </div>
  <div class="building__container">
    <local-navbar :navbar_items = 'navbar_store.buildings_items'  :default_active = 'navbar_store.buildings_items[0].name'>
      <button class="delete">
        <img src="@/assets/logo/delete.svg">
      </button>
    </local-navbar>
    <div class="content__container" v-if="navbar_store.active == 'Фундамент'">
      <div class="left__container">
        <div class="type__container">
          <div class="type__button" v-for="item in project_store.foundation__imgs[0].imgs" :key="item.id" :class = "{'active' :item.id == project_store.active_foundation}" @click="project_store.setActiveFoundation(item.id)">
            <img :src="project_store.foundation__active__imgs[item.id - 1].name" v-if="item.id == project_store.active_foundation">
            <img :src="item.name" v-else>
          </div>
        </div>
        <div class="type__container">
          <div class="type__button" v-for="item in project_store.foundation__imgs[1].imgs" :key="item.id" :class = "{'active' :item.id == project_store.active_foundation}" @click="project_store.setActiveFoundation(item.id)">
            <img :src="project_store.foundation__active__imgs[item.id - 1].name" v-if="item.id == project_store.active_foundation">
            <img :src="item.name" v-else>
          </div>
        </div>
        <!-- Ввод параметров фундамента -->
        <div v-if="project_store.active_foundation == 1 || project_store.active_foundation == 2 || project_store.active_foundation == 3 || project_store.active_foundation == 4">
          <div class="input__container">
            <label for="my-input" class="label">Ширина</label>
            <input class="my-input" type="number" v-model="project_store.foundationWidth">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Длина</label>
            <input class="my-input" type="number" v-model="project_store.foundationLength">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Высота</label>
            <input class="my-input" type="number" v-model="project_store.foundationHeight">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Толщина</label>
            <input class="my-input" type="number" v-model="project_store.foundationDepth">
          </div>
        </div>
        <div class="input__container" v-if="project_store.active_foundation == 5 || project_store.active_foundation == 6 || project_store.active_foundation == 7">
          <label for="my-input" class="label">Общий периметр</label>
          <input class="my-input" type="number" v-model="project_store.commonPerimeter">
        </div>
        <div class="input__container" v-if="project_store.active_foundation == 3 || project_store.active_foundation == 4 || project_store.active_foundation == 6">
          <label for="my-input" class="label">Суммарная длина ленты</label>
          <input class="my-input" type="number" v-model="project_store.tapeLength">
        </div>
      </div>
      <div class="right__container">
        <div class="inputs__header">Опалубка</div>
        <div class="input__container">
          <label for="my-input" class="label">Ширина доски</label>
          <input class="my-input" type="number" v-model="project_store.boardWidth">
        </div>
        <div class="inputs__header reinforcement">Арматура</div>
        <div class="input__container">
          <label for="my-input" class="label">Вид арматуры</label>
          <input class="my-input" type="number" v-model="project_store.reinforcementType">
        </div>
        <div class="input__container">
          <label for="my-input" class="label">Количество прутьев в кольце</label>
          <input class="my-input" type="number" v-model="project_store.reinforcementCount">
        </div>
        <div class="btn__container">
          <sub-btn class="reset" @click="foundationReset()">Сбросить</sub-btn>
          <main-btn class="calculate" @click="project_store.testF()">Рассчитать</main-btn>
        </div>
      </div>
    </div>
    <div class="content__container" v-if="navbar_store.active == 'Коробка'">
      <!-- Ввод параметров фундамента -->
      <div class="left__container">
        <sub-btn class="add_floor">Добавить этаж</sub-btn> 
        <div class="inputs__header">1 этаж</div>
        <div class="type__container">
          <div class="type__button" v-for="item in project_store.material__imgs" :key="item.id" :class = "{'active' :item.id == project_store.active_floor}" @click="project_store.setActiveFloor(item.id)">
            <img :src="project_store.material__active__imgs[item.id - 1].name" v-if="item.id == project_store.active_floor">
            <img :src="item.name" v-else>
          </div>
        </div>
        <div class="input__container">
          <label for="my-input" class="label">Суммарная длина стен</label>
          <input class="my-input" type="number" v-model="project_store.totalWallsLength">
        </div>
        <div class="input__container">
          <label for="my-input" class="label">Высота стен</label>
          <input class="my-input" type="number" v-model="project_store.wallHeight">
        </div>
        <div class="input__container">
          <label for="my-input" class="label">Толщина стен</label>
          <input class="my-input" type="number" v-model="project_store.wallDepth">
        </div>
        <div class="input__container">
          <label for="my-input" class="label">Суммарная площадь окон и дверей</label>
          <input class="my-input" type="number" v-model="project_store.windowsAndDoors">
        </div>
      </div>
      <div class="right__container">
        <div v-if="project_store.active_floor == 1 || project_store.active_floor == 3">
          <div class="input__container">
            <label for="my-input" class="label">Ширина блока</label>
            <input class="my-input" type="number" v-model="project_store.blockWidth">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Длина блока</label>
            <input class="my-input" type="number" v-model="project_store.blockLength">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Высота блока</label>
            <input class="my-input" type="number" v-model="project_store.blockHeight">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Толщина раствора в кладке</label>
            <input class="my-input" type="number" v-model="project_store.mortar">
          </div>
        </div>
        <div v-if="project_store.active_floor == 2">
          <div class="input__container">
            <label for="my-input" class="label">Ширина бруса</label>
            <input class="my-input" type="number" v-model="project_store.beamWidth">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Длина бруса</label>
            <input class="my-input" type="number" v-model="project_store.beamLength">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Высота бруса</label>
            <input class="my-input" type="number" v-model="project_store.beamHeight">
          </div>
        </div>
        <div class="btn__container">
          <sub-btn class="reset" @click="floorReset()">Сбросить</sub-btn>
          <main-btn class="calculate">Рассчитать</main-btn>
        </div>
      </div>
    </div>
    <div class="content__container" v-if="navbar_store.active == 'Крыша'">
      <div class="left__container"> 
        <div class="type__container">
          <div class="type__button" v-for="item in project_store.roof__imgs" :key="item.id" :class = "{'active' :item.id == project_store.active_roof}" @click="project_store.setActiveRoof(item.id)">
            <img :src="project_store.roof__active__imgs[item.id - 1].name" v-if="item.id == project_store.active_roof">
            <img :src="item.name" v-else>
          </div>
        </div>
        <div class="input__container">
            <label for="my-input" class="label">Ширина основания</label>
            <input class="my-input" type="number" v-model="project_store.baseWidth">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Длина основания</label>
            <input class="my-input" type="number" v-model="project_store.baseLength">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Высота подъема</label>
            <input class="my-input" type="number" v-model="project_store.liftingHeight">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Свес карниза</label>
            <input class="my-input" type="number" v-model="project_store.eavesOverhang">
          </div>
      </div>
      <div class="right__container">
        <div v-if="project_store.active_roof == 1 || project_store.active_roof == 2 || project_store.active_roof == 3">
          <div class="input__container">
            <label for="my-input" class="label">Выпуск карниза</label>
            <input class="my-input" type="number" v-model="project_store.corniceIndentation">
          </div>
        </div>
        <div v-if="project_store.active_roof == 3">
          <div class="input__container">
            <label for="my-input" class="label">Высота дополнительного подъема</label>
            <input class="my-input" type="number" v-model="project_store.liftingAdditionalHeight">
          </div>
          <div class="input__container">
            <label for="my-input" class="label">Ширина дополнительного основания</label>
            <input class="my-input" type="number" v-model="project_store.baseAdditionalWidth">
          </div>
        </div>
        <div v-if="project_store.active_roof == 4">
          <div class="input__container">
            <label for="my-input" class="label">Ширина заложения</label>
            <input class="my-input" type="number" v-model="project_store.baseAdditionalWidth">
          </div>
        </div>
        <div class="btn__container">
          <sub-btn class="reset" @click="roofReset()">Сбросить</sub-btn>
          <main-btn class="calculate" @click="test()">Рассчитать</main-btn>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
  export default {name: "building-form" };
</script>

<script setup lang="ts">
  import { useLocalNavbarStore } from "@/store/local-navbar_store";
  import { useCreateProjectStore } from "@/store/create-project_store";
  import { useFormulasStore } from "@/store/formulas_store";

  const formulas_store = useFormulasStore();
  const project_store =  useCreateProjectStore();
  const navbar_store = useLocalNavbarStore();

  async function test(){
    const str =  await formulas_store.fetchTechnicalFormula(1)
    console.log(eval(str))
  }


  function foundationReset(){
    project_store.foundationWidth = ""
    project_store.foundationLength = ""
    project_store.foundationHeight = ""
    project_store.foundationDepth = ""
    project_store.commonPerimeter = ""
    project_store.tapeLength = ""
    project_store.boardWidth = ""
    project_store.reinforcementType = ""
    project_store.reinforcementCount = ""
  }
  function floorReset(){
    project_store.totalWallsLength = ""
    project_store.wallHeight = ""
    project_store.wallDepth = ""
    project_store.windowsAndDoors = ""
    project_store.blockWidth = ""
    project_store.blockLength = ""
    project_store.blockHeight = ""
    project_store.mortar = ""
    project_store.beamWidth = ""
    project_store.beamLength = ""
    project_store.beamHeight = ""
  }
  function roofReset(){
    project_store.baseWidth = ""
    project_store.baseLength = ""
    project_store.liftingHeight = ""
    project_store.eavesOverhang = ""
    project_store.corniceIndentation = ""
    project_store.baseAdditionalWidth = ""
    project_store.liftingAdditionalHeight = ""
  }
</script>

<style lang="scss" scoped>
.input__container{
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0.5rem 0;
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
.container{
  background-color: #F4F4F4; 
  border-radius: 0.5rem;
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
.building__container{
    width: 100%;
    background-color: #fff;
    padding: 3rem 4rem;
    margin-bottom: 5rem;
    box-shadow: 0px 0px 10px #e1e6e6;
    .add_floor{
      margin-bottom: 1rem;
    }
    .delete{
      background-color: #fff;
      padding: 0.35rem;
      border-radius: 0.4rem;
      transition: 0.5s;
      border: none;
      margin-top: 0.5rem;
    }
    .delete:hover{
      cursor: pointer;
      background-color: #fce7e7;
    }
    .content__container{
        display: flex;
        .left__container{
            width: 50%;
            padding: 0 15% 0 0;
            height: 100%;
            .custom__input{
                margin-bottom: 1.5rem;
            }
            .type__container{
              display: flex;
              margin-bottom: 1.5rem;
              .type__button{
                background-color: #FFF7F5;
                border: 1px solid #FF594B;
                padding: 1.2rem;
                width: 6rem;
                height: 6rem;
                border-radius: 0.5rem;
                margin-right: 1.5rem;
                transition: 0.2s;
                &:hover{
                  background-color: #ffede8;
                  cursor: pointer;
                }
                &.active{
                  background-color: #FF594B;
                }
              }
            }
        }
        .inputs__header{
              color: #77AF68;
              font-weight: 500;
              padding-bottom: 1rem;
              border-bottom: 1px solid #77AF68;
              margin-bottom: 1rem;
              &.reinforcement{
                margin-top: 2rem;
              }
            }
        .right__container{
            width: 50%;
            display: flex;
            flex-direction: column;
            padding-left: 8rem;

          .btn__container{
            margin-top: auto;
            display: flex;
          .reset{
              margin-left: auto;
              margin-right: 0.5rem;
            }
          }
        }
    }
}
</style>