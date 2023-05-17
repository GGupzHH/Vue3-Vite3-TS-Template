<template>
  test components
</template>

<script lang="ts">
export default defineComponent({
  name: 'Test'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
</script>

<style scoped lang="scss">

</style>