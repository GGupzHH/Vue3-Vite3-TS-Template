<template>
  <div class="custom-pagination">
    <el-pagination
      v-model:currentPage="_currentPage"
      background
      :page-size="limit"
      :page-sizes="pageSizes"
      layout="slot, prev, pager, next, sizes, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <span class="wrap-pageination-slot">{{ '共有数据' + total + '条' }}</span>
    </el-pagination>
  </div>
</template>

<script lang="ts">
/**
 * 分页组件，用于表格或单独使用
 */
export default defineComponent({
  name: 'Pagination'
})

</script>

<script lang="ts" setup>
const props = defineProps({
  // 切换每页多少条
  pageSizes: {
    type: Array,
    default: () => {
      return [20, 40, 60, 80, 100]
    }
  },
  // 每页显示条目个数
  limit: {
    type: Number,
    default: 20
  },
  // 总条目数
  total: {
    type: Number,
    default: 0
  },
  // 当前页码
  page: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits([
  'handleSizeChange',
  'handleCurrentChange',
  'update:page'
])

// 当前页码更新
const _currentPage = ref(1)
watch(
  () => props.page,
  () => {
    if (props.page) {
      _currentPage.value = props.page
    }
  },
  {
    immediate: true
  }
)
watch(
  () => _currentPage.value,
  () => {
    emits('update:page', _currentPage.value)
  },
  {
    immediate: true
  }
)

// 每页条目数改变时触发
const handleSizeChange = (val: number) => {
  _currentPage.value = 1
  emits('handleSizeChange', val)
}

// 当前页码改变时触发
const handleCurrentChange = (val: number) => {
  emits('update:page', val)
  emits('handleCurrentChange', val)
}
</script>

<style lang="scss">
.custom-pagination {
  min-height: 0;

  .el-pagination {
    display: flex;
    padding: 10px 0;

    .el-pagination__sizes {
      padding-left: 10px;
      margin-right: 0;
    }

    .el-pagination__jump {
      padding-right: 10px;
    }
  }

  .wrap-pageination-slot {
    flex: 1;
    justify-content: flex-start !important;
    padding-left: 10px;
  }
}
</style>
