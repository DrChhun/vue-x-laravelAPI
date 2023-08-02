<template>
  <div class="flex flex-col px-8 py-12 w-3/12 border-r-2 border-gray-100">
    <router-link to="/">
        <h2 class="text-2xl font-bold mb-16">MEGA Coffee</h2>
    </router-link>
    <div class="space-y-4">
        <div v-for="x in menu" :key="x.id">
            <router-link :to="x.route">
                <Menu :menuName="x.name" />
            </router-link>
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
            // {
            //     id: '1',
            //     name: "Menu",
            //     route: 'menu'
            // },
            // {
            //     id: '2',
            //     name: "Order List",
            //     route: 'list'
            // },
            {
                id: '3',
                name: "Order History",
                route: 'history'
            },
            {
                id: '4',
                name: "Revenue",
                route: 'revenue'
            },
            {
                id: '5',
                name: "Manage Data",
                route: 'manage'
            }
        ]

        const href = window.location.href;
        const path = href.split('/');
        const pathLength = path.length;
        const getPath = path[pathLength - 1];

        return {menu, getPath}
    }
}
</script>