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
          <formula-card :title="'Блок'">
            <div v-for="item in data" :key="item.id">
              <formula-block v-if="item.Material == 'Блок' && item.BuildingPart == 'Коробка'" :key="item.id" :formula = "item"/>
            </div>
          </formula-card>
          <formula-card :title="'Брус'">
            <div v-for="item in data" :key="item.id">
              <formula-block v-if="item.Material == 'Брус' && item.BuildingPart == 'Коробка'" :key="item.id" :formula = "item"/>
            </div>
          </formula-card>
          <formula-card :title="'Арматура'">
            <div v-for="item in data" :key="item.id">
              <formula-block v-if="item.Material == 'Арматура' && item.BuildingPart == 'Коробка'" :key="item.id" :formula = "item"/>
            </div>
          </formula-card>
        </div>
        <div class="row">
          <formula-card :title="'Кирпич'">
            <div v-for="item in data" :key="item.id">
              <formula-block v-if="item.Material == 'Кирпич' && item.BuildingPart == 'Коробка'" :key="item.id" :formula = "item"/>
            </div>
          </formula-card>
        </div>
    </div>
    <div class="content" v-if="sidebar_store.active == 'Крыша'">
      <div class="row">
        <formula-card :title="'Брус'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Брус' && item.BuildingPart == 'Крыша'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
        <formula-card :title="'Доска'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Доска' && item.BuildingPart == 'Крыша'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
        <formula-card :title="'Карнизная система'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Карнизная система' && item.BuildingPart == 'Крыша'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
      </div>
      <div class="row">
        <formula-card :title="'Кровельный материал'">
          <div v-for="item in data" :key="item.id">
            <formula-block v-if="item.Material == 'Кровельный материал' && item.BuildingPart == 'Крыша'" :key="item.id" :formula = "item"/>
          </div>
        </formula-card>
      </div>
    </div>
    <modal-window>
      <div class="calculator__container">
        <div class="calculator__header">{{ formulas_store.formula.Category }} <span>{{ formulas_store.formula.Material }}</span></div>
        <div class="display">{{ formulas_store.formulaToString() }}</div>
        <div class="calculator__content">
          <div class="custom__buttons" v-if="sidebar_store.active == 'Фундамент'">
            <div class="custom__buttons-container" v-if="formulas_store.formula.Category == 'Плита'">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[0].buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
            <div class="custom__buttons-container" v-if="formulas_store.formula.Category == 'Ленточный с перегородкой' || formulas_store.formula.Category == 'Ленточный'">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[0].buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
              <div class="custom__btn" v-for="item in formulas_store.subButtons[0].tape_buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
            <div class="custom__buttons-container" v-if="formulas_store.formula.Category == 'Нестандартная плита'">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[0].nonstandard_buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
            <div class="custom__buttons-container" v-if="formulas_store.formula.Category == 'Нестандартный ленточный'">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[0].nonstandard_tape_buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
            <div class="custom__buttons-container" v-if="formulas_store.formula.Category == 'Нестандартный ленточный с перегородкой'">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[0].nonstandard_tape_buttons_2" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
          </div>
          <div class="custom__buttons" v-if="sidebar_store.active == 'Коробка'">
            <div class="custom__btn" v-for="item in formulas_store.subButtons[1].buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            <div v-if="formulas_store.formula.Material == 'Блок' || formulas_store.formula.Material == 'Кирпич'" class="custom">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[1].buttons_block" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
            <div v-if="formulas_store.formula.Material == 'Брус'" class="custom">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[1].buttons_beam" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
          </div>
          <div class="custom__buttons" v-if="sidebar_store.active == 'Крыша'">
            <div v-if="formulas_store.formula.Category == 'Односкатная крыша' || formulas_store.formula.Category == 'Двускатная крыша'" class="custom">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[2].buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
            <div v-if="formulas_store.formula.Category == 'Мансардная крыша'" class="custom">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[2].buttons" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
              <div class="custom__btn" v-for="item in formulas_store.subButtons[2].buttons_additional" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
            <div v-if="formulas_store.formula.Category == 'Вальмовая крыша'" class="custom">
              <div class="custom__btn" v-for="item in formulas_store.subButtons[2]. buttons_gable" :key="item.id" @click="formulas_store.addFormulaContent(item.value, item.technicalValue)">{{ item.value }}</div>
            </div>
          </div>
          <div class="standard__buttons">
            <div class="calculator__row delete">
              <div class="btn" @click="formulas_store.deleteFormulaContent()">
                <img src="@/assets/logo/delete__text.svg" >
              </div>
            </div>
            <div class="calculator__row" v-for="item in formulas_store.calculatorRows" :key="item.row">
              <div class="btn" v-for="btn in item.buttons" :key="btn.id"  @click="formulas_store.addFormulaContent(btn.value, btn.technicalValue)">{{ btn.value }}</div>
            </div>
          </div>
        </div>
        <div class="btns">
          <sub-btn class="sub__button">Отмена</sub-btn>
          <form @submit.prevent="onUpdateFormula( formulas_store.formula.ID, formulas_store.formulaToString().value, formulas_store.formulaTechnicalToString().value), modal_store.setShow()">
            <main-btn class="save__button">Сохранить</main-btn>
          </form>
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
  import { onBeforeMount, onUpdated, ref } from 'vue';
  import { useModalStore } from "@/store/modal_store";

  const modal_store = useModalStore();
  const sidebar_store = useSidebarStore();
  const formulas_store = useFormulasStore();
  const data = ref();

  async function fetchFormulas() {
    data.value = await formulas_store.fetchFormulas()
  }
  async function onUpdateFormula(ID: number, Content: string,  TechnicalContent: string){
    await formulas_store.updateFormula(ID, Content, TechnicalContent)
    fetchFormulas()
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
    height: 40rem;
    .custom{
      height: 50%;
      display: flex;
      flex-direction: column;
      .custom__btn{
        margin-bottom: 1rem;
      }
    }
    .custom__buttons{
      width: 60%;
      padding: 3rem 3rem 1rem 0;
      .custom__buttons-container{
        height: 100%;
      }
      .custom__btn{
        border: 2px solid #77AF68;
        color:#77AF68;
        font-weight: 600;
        padding: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        transition: 0.3s;
        margin-bottom: 1rem;
        &:hover{
          background-color: #77AF68;
          color: #fff;
          cursor: pointer;
        }
      }
    } 
    .standard__buttons{
      width: 40%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 3rem 0 1rem 0;
      .calculator__row{
        display: flex;
        justify-content: space-between;
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