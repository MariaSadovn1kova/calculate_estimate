<template>
   <div class="sidebar__container">
    <div class="sidebar__element-container">
        <div class="sidebar__element">
           емае
        </div>
        <div class="sidebar__element">
           емае
        </div>
        <div class="sidebar__element">
           емае
        </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "main-sidebar" };
</script>

<style lang="scss" scoped>
 .sidebar__container{
        flex-shrink: 0;
        width: 15rem;
        background-color: #fff;
        box-shadow: 0px 4px 4px #DEE1E0;
        min-height: 100vh;
        .sidebar__element{
            padding: 0.8rem 2rem 0.8rem 2rem;
            color: #868585;
            font-weight: 600;
        }
        .sidebar__element:hover{
            background-color: #FFEDE9;
            color: #FF594B;
            cursor: pointer;
            font-weight: 600;
        }
        .active{
            background-color: #FFEDE9;
            color: #FF594B;
            border-left: 5px solid #FF594B;
        }
    }
</style>