<template>
    <div v-if="data.popup">
        <PopupFormVue />
    </div>
    <MainViewVue>
        <HomeMenuVue />
    </MainViewVue>
</template>

<script>
import HomeMenuVue from '@/components/Menu/HomeMenu.vue'
import MainViewVue from './MainView.vue'
import PopupFormVue from '@/components/Popup/PopupForm.vue'
import { useDataStore } from '@/store/DataStore'

export default {
    components: {
        MainViewVue,
        HomeMenuVue,
        PopupFormVue
    },
    setup() {
        const data = useDataStore();
        return {data}
    }
}
</script>