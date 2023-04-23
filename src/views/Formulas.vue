<template>
  <div class="formulas__container">
    <div v-if="sidebar_store.active == 'Фундамент'" class="foundation-formulas__container">
      <div class="board__formulas formula__container">
        <div class="header">Доска</div>
      </div>
      <div class="board__formulas formula__container">
        <div class="header">Бетон</div>
      </div>
      <div class="board__formulas formula__container">
        <div class="header">Арматура</div>
      </div>
      <div class="board__formulas formula__container">
        <div class="header">Прут</div>
      </div>
    </div>
    <div v-if="sidebar_store.active == 'Коробка'" class="foundation-formulas__container">
      <div class="board__formulas formula__container">
        <div class="header">Брус</div>
      </div>
      <div class="board__formulas formula__container">
        <div class="header">Джут</div>
      </div>
      <div class="board__formulas formula__container">
        <div class="header">Брусок</div>
      </div>
      <div class="board__formulas formula__container">
        <div class="header">Доска</div>
      </div>
    </div>
    <div v-if="sidebar_store.active == 'Крыша и крыльцо'" class="foundation-formulas__container">
      <div class="board__formulas formula__container">
        <div class="header">Брус</div>
      </div>
      <div class="board__formulas formula__container">
        <div class="header">Доска</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "formulas-for-calculation" };
</script>
<script setup lang="ts">
  import { useSidebarStore } from "@/store/sidebar_store";

  const sidebar_store = useSidebarStore();
</script>

<style lang="scss" scoped>
.formulas__container{
  .foundation-formulas__container{
    .formula__container{
      background-color: #fff;
      height: 30rem;
      box-shadow: 0px 0px 10px #e1e6e6;
      border-radius: 0.5rem;
      padding: 2rem 3rem;
      margin-bottom: 2rem;
      .header{
        font-size: 1.1rem;           
        color: #4A4F48;
        font-weight: 500;
      }
    }
    .board__formulas{
    
    }
  }
}
</style>