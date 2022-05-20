import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    shoppingCart: []
  }),
  getters: {
    carts: (state) =>
      state.shoppingCart.reduce((items, item) => {
        const existingItem = items.find((it) => it.name === item)

        if (!existingItem) {
          items.push({ name: item, amount: 1 })
        } else {
          existingItem.amount++
        }

        return items
      }, []),
  },
  actions: {
    addItem (name) {
      this.shoppingCart.push(name)
    },
    removeItem (name) {
      // this.
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}