<template>
  <div class="formulas__container">
    <div class="content" v-if="sidebar_store.active == 'Фундамент'">
      <div class="row">
        <formula-card :title="'Доска'">
          <formula-block v-for="item in foundation_types" :key="item.id" :title="item.name"/>
        </formula-card>
        <formula-card :title="'Бетон'">
          <formula-block v-for="item in foundation_types" :key="item.id" :title="item.name"/>
        </formula-card>
        <formula-card :title="'Арматура'">
          <formula-block v-for="item in foundation_types" :key="item.id" :title="item.name"/>
        </formula-card>
      </div>
      <div class="row">
        <formula-card :title="'Прут'">
          <formula-block v-for="item in foundation_types" :key="item.id" :title="item.name"/>
        </formula-card>
      </div>
    </div>
    <div class="content" v-if="sidebar_store.active == 'Коробка'">
        <div class="row">
          <formula-card :title="'Доска'">
          
          </formula-card>
          <formula-card :title="'Брусок'"/>
          <formula-card :title="'Арматура'"/>
        </div>
        <div class="row">
          <formula-card :title="'Кирпич'"/>
          <formula-card :title="'Блок'"/>
          <formula-card :title="'Брус'"/>
        </div>
    </div>
    <div class="content" v-if="sidebar_store.active == 'Крыша и крыльцо'">
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
        <div class="display">Я формулка</div>
        <div class="calculator__content">
          <div class="custom__buttons"></div>
          <div class="standard__buttons">
            <div class="calculator__row">
              <div class="btn">1</div>
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
      </div>
    </modal-window>
  </div>
</template>

<script lang="ts">
export default { name: "formulas-for-calculation" };
</script>
<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";

  const sidebar_store = useSidebarStore();
  const foundation_types = [
    {id: 1, name: 'Плита'},
    {id: 2, name: 'Ленточный'},
    {id: 3, name: 'Ленточный с перегородкой'},
    {id: 4, name: 'Нестандартная плита'},
    {id: 5, name: 'Нестандартный ленточный'},
    {id: 6, name: 'Нестандартный ленточный с перегородкой'}

  ]
</script>

<style lang="scss" scoped>
.row{
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
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
  }
  .calculator__content{
    display: flex;
    .custom__buttons{
      width: 60%;
    } 
    .standard__buttons{
      width: 40%;
      .calculator__row{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
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
}
</style>