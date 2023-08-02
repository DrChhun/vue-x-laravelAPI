<template>
    <div class="bg-white p-4 text-start">
        <h2 class="text-2xl font-bold">Order History</h2>
        <div class="py-4 mt-4 space-y-4">
            <div class="space-y-4" v-for="(x, index) in historyData" :key="index">
                <h2 class="text-xl font-semibold">Order #{{x.order}}</h2>
                <div class="flex" v-for="(x, index) in JSON.parse(x[0])" :key="index">
                    <img class="w-32 aspect-sqare rounded-md group-hover:scale-105 duration-1000" src="https://www.whiskaffair.com/wp-content/uploads/2020/12/Iced-Vanilla-Latte-2-3.jpg" alt="">
                    <div class="ml-8 w-full">
                        <div class="flex justify-between">
                            <div>
                                <h2 class="text-xl font-semibold">{{x.name}}</h2>
                                <p>items x {{x.total}}</p>
                            </div>
                            <div class="text-end">
                                <p class="text-xl font-semibold">Price ${{x.price * x.total}}</p>
                                <p class="text-gray-500">VAT not included</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
    setup() {
        const historyData = ref([])
        const img = 'https://www.whiskaffair.com/wp-content/uploads/2020/12/Iced-Vanilla-Latte-2-3.jpg';

        const getHistory = async () => {
            const headers = { Authorization: `Bearer GpWkPiQsvBhXDKTRFYuMKJkpnQkioC9NzyBpu5R0` }
            await axios.get('http://localhost:8000/api/v1/history', { headers })
                .then(res => historyData.value = res.data.data)
                .then(err => console.log(err))
        }

        getHistory();

        console.log(historyData.value);

        return {img, historyData}
    }
}
</script>