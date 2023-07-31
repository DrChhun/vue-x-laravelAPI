<template>
    <div class="flex bg-white shadow-lg p-4 rounded-lg w-full group">
        <div class="mr-4 overflow-hidden rounded-md">
            <img class="w-56 aspect-sqare rounded-md group-hover:scale-105 duration-1000" src="https://www.whiskaffair.com/wp-content/uploads/2020/12/Iced-Vanilla-Latte-2-3.jpg" alt="">
        </div>
        <div class="text-start flex flex-col justify-between w-full">
            <h2 class="text-xl font-bold">{{name}}</h2>
            <div class="flex space-x-4">
                <p>{{available}} Available</p>
                <p>{{sold}} Sold</p>
            </div>
            <div class="flex space-x-8">
                <p>${{price}}</p>
                <div class="flex space-x-4 cursor-pointer">
                    <div @click="handleMinusItem" class="h-6 w-6 text-center bg-white rounded-full text-black shadow-md">-</div>
                    <p>{{itemCount}}</p>
                    <div @click="handleAddItem" class="h-6 w-6 text-center bg-black rounded-full text-white">+</div>
                </div>
            </div>
            <button @click="handleClick(name, available, sold, price, itemCount, id)" class="border-2 border-gray-100 py-2 rounded-lg w-full hover:bg-black duration-300 text-gray-300 hover:text-white">Add To Cart</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {useDataStore} from '../../store/DataStore'
export default {
    props: ['name', 'available', 'sold', 'price', 'id'],
    setup() {
        const data = useDataStore();
        const handleClick = (name, available, sold, calPrice, total, id) => {
            let price = calPrice * total
            let itemPrice = calPrice
            data.cart.push({available, sold, name, itemPrice, price, total, id})
        }
        let itemCount = ref(1);

        const handleMinusItem = () => {
            itemCount.value > 1 && itemCount.value--
        }

        const handleAddItem = () => {
            itemCount.value++
        }
        return {handleClick, handleAddItem, handleMinusItem, itemCount}
    }
}
</script>