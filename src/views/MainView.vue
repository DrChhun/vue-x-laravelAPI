<template>
  <div class="home flex min-h-screen">
    <LeftSideVue />
    <div class="py-12 px-8 w-full">
      <slot></slot>
    </div>
    <RightSideVue />
  </div>
</template>

<script lang="ts">
import LeftSideVue from '@/components/Sidebar/LeftSide.vue'
import RightSideVue from '@/components/Sidebar/RightSide.vue'

export default{
  name: 'HomeView',
  props: ['children'],
  components: {
    LeftSideVue,
    RightSideVue
  }
}
</script>
