<template>
  <div class="flex flex-col px-8 py-12 w-3/12 border-r-2 border-gray-100">
    <h2 class="text-2xl font-bold mb-16">MEGA Coffee</h2>
    <div class="space-y-4">
        <div v-for="x in menu" :key="x.id">
            <Menu :menuName="x.name" />
        </div>
    </div>
  </div>
</template>

<script>
import Menu from '../Menu/MenuList.vue';
export default {
    components: {
        Menu
    },
    setup() {
        const menu = [
            {
                id: '1',
                name: "Menu"
            },
            {
                id: '2',
                name: "Order List"
            },
            {
                id: '3',
                name: "Order History"
            },
            {
                id: '4',
                name: "Revenue"
            },
            {
                id: '5',
                name: "Manage Data"
            }
        ]

        return {menu}
    }
}
</script>

<style>

</style>