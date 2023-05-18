<!--
 * @Author: GGupzHH 1248023357@qq.com
 * @Date: 2022-06-28 00:11:27
 * @LastEditors: GGupzHH 1248023357@qq.com
 * @LastEditTime: 2023-05-17 14:43:38
 * @FilePath: /vite-vue3-ts-template/src/components/Layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>

<script lang="ts">

export default defineComponent({
  name: 'AppMain'
})
</script>
