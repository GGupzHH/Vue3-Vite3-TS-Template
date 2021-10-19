<template>
  <div>
    test
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'

export default defineComponent({
  name: 'Xx',
  components: {},
  props: {},
  setup () {
    // Vuex store

    // this
    const { ctx } = getCurrentInstance()

    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>
