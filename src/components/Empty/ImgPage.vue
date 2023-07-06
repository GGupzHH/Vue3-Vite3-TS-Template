<template>
  <div
    class="img-container"
  >
    <img
      :src="blankMap[imgState]?.url"
      alt=""
    >
    <div class="img-info">{{ blankMap[imgState]?.label }}</div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'ImgPage'
})
</script>

<script setup lang="ts">
const prop = defineProps({
  imgState: {
    type: String,
    default: 'noPermission'
  }
})
const blankMap = {
  'unselectedComponents': {
    label: '请先从左侧列表选择要制作的组成部分',
    url: new URL('@/assets/images/unselected-components.png', import.meta.url).href
  },
  'noPermission': {
    label: '您暂时无权查看此组成部分的数据',
    url: new URL('@/assets/images/no-permission.png', import.meta.url).href
  }
}
</script>

<style lang="scss" scoped>
.img-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
  }

  .img-info{
    color: #909399;
    margin-bottom: 60px;
  }
}
</style>
