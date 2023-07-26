<template>
    <div class="flex bg-white shadow-lg p-4 rounded-lg w-full">
        <div class="mr-4">
            <img class="w-32 aspect-sqare rounded-md" src="https://www.whiskaffair.com/wp-content/uploads/2020/12/Iced-Vanilla-Latte-2-3.jpg" alt="">
        </div>
        <div class="text-start flex flex-col justify-between w-full">
            <div class="flex justify-between">
                <h2 class="text-xl font-bold">{{name}}</h2>
                <p @click="handleRemove(id)" class="text-red-500 cursor-pointer">remove</p>
            </div>
            <div class="flex space-x-4">
                <p>${{price}}</p>
                <p>x {{total}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {useDataStore} from '../../store/DataStore'
export default {
    props: ['name', 'price', 'total', 'id'],
    setup(props) {
        const data = useDataStore()
        const handleRemove = () => data.cart.splice(props.id, props.id + 1)   
        return {handleRemove}
    }
}
</script>