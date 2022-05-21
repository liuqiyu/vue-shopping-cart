<script setup>
import Logo from './components/Logo.vue'
import AddGoods from './components/AddGoods.vue'
import { useCartStore } from './stores/cart'

let cart = useCartStore()

// 清空购物车
function clearCart () {
  cart.clearItem()
}

// 购买
function buyCart () {
  cart.clearItem()
}
</script>

<template>
  <div class="common-layout">
    <h1>Vue Shopping Cart</h1>
    <Logo></Logo>
    <AddGoods></AddGoods>
    <el-divider />
    <el-button type="primary" @click="buyCart">购买</el-button>
    <el-button @click="clearCart">清空</el-button>
    <el-divider />
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  padding: 100px 200px;
  h1 {
    margin-bottom: 20px;
  }
}
</style>
