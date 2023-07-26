<template>
    <MainViewVue>
        <HomeMenuVue />
    </MainViewVue>
</template>

<script>
import HomeMenuVue from '@/components/Menu/HomeMenu.vue'
import MainViewVue from './MainView.vue'

export default {
    components: {
        MainViewVue,
        HomeMenuVue
    }
}
</script>