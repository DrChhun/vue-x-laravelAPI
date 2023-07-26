import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        coffeeData: ref([]),
        cart: ref([]),
        data: ref(5),
        greeting: ref("Hello")
    }),
    getters: {
        calSub(): any {
            return this.cart.reduce((a: any, b: any) => a + b.price, 0);
        },
        calTax(): any {
            const cal = this.calSub
            const gg = (cal * 10) / 100;
            return gg;
        },
        calTotal(): any {
            const sub = this.calSub
            const tax = this.calTax
            return sub + tax
        }
    },
    actions: {
    }
})