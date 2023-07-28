import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        coffeeData: ref([]),
        cart: ref([]),
        data: ref(5),
        greeting: ref("Hello"),
        popup: ref(false),
        token: ref('XN9REjk3pnMe748dwkP2gAfwSWzAL6KyQ8Hcy8ur'),
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
        async fetchData() {
            const token = 'XN9REjk3pnMe748dwkP2gAfwSWzAL6KyQ8Hcy8ur';
            const headers = { Authorization: `Bearer ${token}` }
            axios.get('http://localhost:8000/api/v1/coffees', { headers })
                .then(res => this.coffeeData = res.data.data)
        },
        async deleteData(id: number) {
            const token = 'XN9REjk3pnMe748dwkP2gAfwSWzAL6KyQ8Hcy8ur';
            const headers = { Authorization: `Bearer ${token}` }
            axios.delete(`http://localhost:8000/api/v1/coffees/${id}`, { headers })
                .then(res => this.coffeeData = res.data.data)
        }
    }
})