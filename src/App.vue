<template>
  <router-view />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue-demi'
const radio1 = ref<string | number>('2')
</script>

<style lang="sass">
@import '@/styles/index.scss'
</style>

