import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        historyData: ref([]),
        coffeeData: ref([]),
        cart: ref([]),
        data: ref(5),
        greeting: ref("Hello"),
        popup: ref(false),
        token: ref('j5PxFYtf1g7AH4HR3haVUG5iZdT0oE0uWzE3VJgw'),
        customerName: ref('')
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
            const headers = { Authorization: `Bearer ${this.token}` }
            axios.get('https://mega-api.xyz/api/v1/coffees', { headers })
                .then(res => this.coffeeData = res.data.data)
        },
        async deleteData(id: number) {
            const headers = { Authorization: `Bearer ${this.token}` }
            axios.delete(`https://mega-api.xyz/api/v1/coffees/${id}`, { headers })
                .then(res => this.coffeeData = res.data.data)
        },
        async updateData(id: number, oldItem: number, updateItem: number, sold: number) {
            const headers = { Authorization: `Bearer ${this.token}` }
            await axios.patch(`https://mega-api.xyz/api/v1/coffees/${id}`, {
                available: oldItem - updateItem,
                sold: sold + updateItem
            }, { headers })
        },
        async getHistory() {
            const headers = { Authorization: `Bearer ${this.token}` }
            await axios.get('https://mega-api.xyz/api/v1/history', { headers })
                .then(res => this.historyData = res.data)
        },
        async addHistory(props: any) {
            const headers = { Authorization: `Bearer ${this.token}` }
            await axios.post('https://mega-api.xyz/api/v1/history', {
                data: props,
            }, { headers })
        }
    }
})
