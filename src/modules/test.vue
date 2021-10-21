<template>
  <div>
    test
    <IconFont icon='icon-news1' @click='click'/>
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

    const click = () => {
      console.log(123)
    }

    return {
      click
    }
  }
})
</script>

<style scoped lang="scss">

</style>
