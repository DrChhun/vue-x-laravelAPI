<template>
    <MainViewVue>
        <HistoryMenu />
    </MainViewVue>
</template>

<script>
import HistoryMenu from '@/components/History/HistoryMenu.vue'
import MainViewVue from './MainView.vue'

export default {
    components: {MainViewVue, HistoryMenu}
}
</script>