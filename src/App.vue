<script setup>
import Logo from './components/Logo.vue'
import AddGoods from './components/AddGoods.vue'
</script>

<template>
  <div class="common-layout">
    <h1>Vue Shopping Cart</h1>
    <Logo></Logo>
    <AddGoods></AddGoods>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  padding: 100px;
  h1 {
    margin-bottom: 20px;
  }
}
</style>
