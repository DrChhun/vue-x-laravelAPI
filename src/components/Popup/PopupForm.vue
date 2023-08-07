<template>
    <div class="fixed h-full w-full backdrop-blur-sm bg-black/75 z-10">
        <h2 @click="handleClick" class="text-white absolute p-8 font-bold cursor-pointer">Close</h2>
        <div class="flex justify-center items-center h-full">
            <div class="bg-white p-8 rounded-md">
                <h2 class="mb-4 font-bold text-xl">POST to endpoint</h2>
                <form @submit.prevent="createPost" class="flex flex-col space-y-4">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="text" name="title" placeholder="name" v-model="formData.title">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="number" name="price" placeholder="price" v-model="formData.price">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="number" name="available" placeholder="available" v-model="formData.available">
                    <input class="py-2 px-4 border-2 border-gray-200 rounded-md" type="number" name="sold" placeholder="sold" v-model="formData.sold">
                    <button @click="handleToast" type="submit" class="bg-black text-white rounded-md py-2 hover:bg-gray-800 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useDataStore } from '@/store/DataStore';
import axios from 'axios';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    setup() {
        const data = useDataStore();
        const handleClick = () => data.popup = false;
        const formData = ref({
            title: '',
            price: '',
            available: '',
            sold: ''
        });
        const messagePOST = ref('');

        const token = 'XN9REjk3pnMe748dwkP2gAfwSWzAL6KyQ8Hcy8ur';
        const headers = {Authorization: `Bearer ${token}`};

        const createPost = async () => {
            await axios.post('https://mega-api.xyz/api/v1/coffees', {
                title: formData.value.title,
                price: formData.value.price,
                available: formData.value.available,
                sold: formData.value.sold
            }, {headers})
            .then(res => messagePOST.value = res.data)
            .catch(err => messagePOST.value = err.message)
            data.fetchData()
        }

        const handleToast = () => {
            {messagePOST.value == 'Request failed with status code 422' || messagePOST.value == '' ?
                toast.error(messagePOST, {
                    autoClose: 1500,
                    position: toast.POSITION.TOP_RIGHT,
            })
            :
                toast.info(messagePOST, {
                    autoClose: 1500,
                    position: toast.POSITION.TOP_RIGHT,
                })
            }
        }

        return {handleClick, formData, createPost, handleToast}
    }
}
</script>
