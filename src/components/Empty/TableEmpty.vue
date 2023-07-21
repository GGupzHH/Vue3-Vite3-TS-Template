<template>
  <div class="table-empty-wrapper">
    <EmptyIcon />
    <p class="empty-text">
      {{ emptyText }}
    </p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
export default defineComponent({
  name: 'TableEmpty'
})
</script>

<script setup lang="ts">
import EmptyIcon from '@/assets/svg/empty.svg'
const proxy = getCurrentInstance()?.proxy

const props = defineProps({
  emptyText: {
    type: String,
    default: '暂无数据'
  }
})
</script>

<style scoped lang="scss">
.table-empty-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1em;
  padding-bottom: 60px;

  .empty-text{
    color:#909399
  }
}
</style>
