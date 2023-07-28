<template>
  <div class="flex flex-col items-start">
    <InputBar class="mb-8" placeholder="Search" />
    <h2 class="text-2xl mb-8">Choose Menu</h2>
    <div class="grid grid-cols-2 gap-6 w-full">
        <div v-for="x in data.coffeeData" :key="x.id">
            <MenuCardVue 
                :available="x.available" 
                :name="x.title" 
                :sold="x.sold"
                :price="x.price"
                :id="x.id"
            />
        </div>
        <div @click="handleOpenPopup" class="flex bg-white shadow-lg p-4 rounded-lg w-full group cursor-pointer hover:shadow-xl duration-300">
            <div class="text-start flex flex-col justify-center items-center text-5xl text-gray-200 hover:text-gray-400 duration-300 w-full">
                +
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MenuCardVue from '../Card/MenuCard.vue'
import InputBar from '../Input/InputBar.vue'
import { useDataStore } from '@/store/DataStore';

export default {
    components: {
        InputBar,
        MenuCardVue
    },
    setup() {
        const data = useDataStore();

        const handleOpenPopup = () => {
            data.popup = true
        }

        data.fetchData()

        return {handleOpenPopup, data}
    }
}
</script>