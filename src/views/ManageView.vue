<template>
    <MainViewVue>
        
        <table class="table-auto w-full">
            <thead class="bg-gray-200">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Sold</th>
                    <th>Setting</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-100" v-for="(x, index) in data.coffeeData" :key="index">
                    <td>{{x.id}}</td>
                    <td>{{x.title}}</td>
                    <td>{{x.price}}</td>
                    <td>{{x.available}}</td>
                    <td>{{x.sold}}</td>
                    <td @click="handleDelete(x.id)" class="text-red-500 cursor-pointer">Delete</td>
                </tr>
            </tbody>
        </table>
    </MainViewVue>
</template>

<script>
import { useDataStore } from '@/store/DataStore'
import MainViewVue from './MainView.vue'
export default {
    components: {
        MainViewVue
    },
    setup() {
        const data = useDataStore()
        data.fetchData()
        const handleDelete = (id) => {
            data.deleteData(id)
            data.fetchData()
        };
        return {data, handleDelete}
    }
}
</script>