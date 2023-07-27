<template>
    <div class="fixed h-full w-full backdrop-blur-sm bg-black/75 z-10">
        <h2 @click="handleClick" class="text-white absolute p-8 font-bold cursor-pointer">Close</h2>
        <div class="flex justify-center items-center h-full">
            <div class="bg-white p-8 rounded-md">
                <h2 class="mb-4 font-bold text-xl">POST to endpoint</h2>
                <form class="flex flex-col space-y-4">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="text" name="title" placeholder="name">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="number" name="price" placeholder="price">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="number" name="available" placeholder="available">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="number" name="sold" placeholder="sold">
                    <button type="button" class="bg-black text-white rounded-md py-2 hover:bg-gray-800 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useDataStore } from '@/store/DataStore';
export default {
    setup() {
        const data = useDataStore();
        const handleClick = () => {
            data.popup = false;
        }

        return {handleClick}
    }
}
</script>