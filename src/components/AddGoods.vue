<template>
  <el-select v-model="value"
             class="m-2"
             placeholder="Select"
             clearable
             size="large">
    <el-option v-for="item in goodsLists"
               :key="item"
               :label="item"
               :value="item" />
  </el-select>

  <el-button :disabled="value.length <= 0"
             type="primary"
             @click="addItem">添加</el-button>

  <p>

  <ol>
    <li v-for="(item, index) in cart.carts"
        :key="index">{{item.name}}({{item.amount}}) <el-button type="danger" :icon="Delete" @click="removeItem(item.name)"/></li>
  </ol>
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { Delete } from '@element-plus/icons-vue'
import { useCartStore } from './../stores/cart'

let value = ref('')

const cart = useCartStore()

const goodsLists = ['牙刷', '毛巾', '杯子', '凳子']

function addItem () {
  cart.addItem(value.value)
  value.value = ''
}

function removeItem (name) {
  cart.removeItem(name)
}
</script>

<style lang="scss" scoped>
</style>
