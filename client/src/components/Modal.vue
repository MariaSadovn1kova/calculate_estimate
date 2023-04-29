<template>
  <div class="dialog" v-if="modal_store.show" @click.stop="modal_store.setShow">
    <div @click.stop class="dialog__content" >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "modal-window" };
</script>
<script setup lang="ts">
  import { useModalStore } from "@/store/modal_store";

  const modal_store = useModalStore();
</script>

<style lang="scss" scoped>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
    .dialog__content{
      margin: auto;
      background: white;
      border-radius:0.3rem;
  }
}
</style>