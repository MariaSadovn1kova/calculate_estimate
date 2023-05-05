<template>
  <div class="formulas__container">
    <div class="content" v-if="sidebar_store.active == 'Фундамент'">
      <div class="row">
        <formula-card :title="'Доска'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Доска' && item.BuildingPart == 'Фундамент'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
        <formula-card :title="'Бетон'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Бетон' && item.BuildingPart == 'Фундамент'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
        <formula-card :title="'Арматура'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Арматура' && item.BuildingPart == 'Фундамент'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
      </div>
      <div class="row">
        <formula-card :title="'Прут'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Прут' && item.BuildingPart == 'Фундамент'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
      </div>
    </div>
    <div class="content" v-if="sidebar_store.active == 'Коробка'">
        <div class="row">
          <formula-card :title="'Блок'"/>
          <formula-card :title="'Брус'"/>
          <formula-card :title="'Арматура'"/>
        </div>
        <div class="row">
          <formula-card :title="'Кирпич'"/>
        </div>
    </div>
    <div class="content" v-if="sidebar_store.active == 'Крыша'">
      <div class="row">
        <formula-card :title="'Брус'"/>
        <formula-card :title="'Доска'"/>
        <formula-card :title="'Карнизная система'"/>
      </div>
      <div class="row">
        <formula-card :title="'Кровельный материал'"/>
      </div>
    </div>
    <modal-window>
      <div class="calculator__container">
        <div class="calculator__header">{{ modal_store.formula.Category }} <span>{{ modal_store.formula.Material }}</span></div>
        <div class="display">{{ modal_store.formulaContent }}</div>
        <div class="calculator__content">
          <div class="custom__buttons">
            <div class="custom__btn" v-for="field in foundationFields" :key="field">
              {{ field }}
            </div>
          </div>
          <div class="standard__buttons">
            <div class="calculator__row delete">
              <div class="btn">
                <img src="@/assets/logo/delete__text.svg" >
              </div>
            </div>
            <div class="calculator__row">
              <div class="btn" @click="modal_store.addFormulaContent(1)">1</div>
              <div class="btn">2</div>
              <div class="btn">3</div>
              <div class="btn">
                +
              </div>
            </div>
            <div class="calculator__row">
              <div class="btn">4</div>
              <div class="btn">5</div>
              <div class="btn">6</div>
              <div class="btn">
                -
              </div>
            </div>
            <div class="calculator__row">
              <div class="btn">7</div>
              <div class="btn">8</div>
              <div class="btn">9</div>
              <div class="btn">
                /
              </div>
            </div>
            <div class="calculator__row">
              <div class="btn">(</div>
              <div class="btn">0</div>
              <div class="btn">)</div>
              <div class="btn">
                *
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <sub-btn class="sub__button">Отмена</sub-btn>
          <main-btn class="save__button">Сохранить</main-btn>
        </div>
      </div>
    </modal-window>
  </div>
</template>

<script lang="ts">
export default { name: "formulas-for-calculation" };
</script>
<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";
  import { useFormulasStore } from "@/store/formulas_store";
  import { onBeforeMount, ref } from 'vue';
  import { useModalStore } from "@/store/modal_store";

  const modal_store = useModalStore();
  const sidebar_store = useSidebarStore();
  const formulas_store = useFormulasStore();
  const data = ref();
  const foundationFields = ['Ширина', 'Длина', 'Высота', 'Толщина', 'Ширина доски', 'Вид арматуры', 'Количество прутьев в кольце']

  async function fetchFormulas() {
    data.value = await formulas_store.fetchFormulas()
  }

  onBeforeMount(async () => {
    fetchFormulas()
  })
</script>

<style lang="scss" scoped>
.row{
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}
.calculator__header{
  font-size: 1.1rem;           
  color: #4A4F48;
  font-weight: 500;
  margin-bottom: 1rem;
  span{
    color: #77AF68;
    font-size: 1.1rem;   
    font-weight: 500;
  }
}
.calculator__container{
  padding: 2rem;
  width: 60rem;
  .display{
    width: 100%;
    height: 8rem;;
    border: 2px solid #bee4b3;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fafff8;
  }
  .calculator__content{
    display: flex;
    .custom__buttons{
      width: 60%;
      margin-top: 1rem;
      padding-right: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .custom__btn{
        border: 2px solid #77AF68;
        color:#77AF68;
        font-weight: 600;
        padding: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        transition: 0.3s;
        &:hover{
          background-color: #77AF68;
          color: #fff;
          cursor: pointer;
        }
      }
    } 
    .standard__buttons{
      width: 40%;
      .calculator__row{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        &.delete{
          justify-content: end;
        }
        .btn{
          background-color: #77AF68;
          font-weight: 600;
          font-size: 1.5rem;
          color: #fff;
          width: 5rem;
          height: 5rem;
          border-radius: 0.5rem;
          text-align: center;
          padding-top: 1.6rem;
          transition: 0.2s;
          &:hover{
            background-color: #5d8f4f;
            cursor: pointer; 
          }
        }
      }
    }
  }
  .btns{
    justify-content: end;
    margin-top: 2rem;
    display: flex;
    .save__button{
      margin-left: 0.5rem;
    }
  }
}
</style>