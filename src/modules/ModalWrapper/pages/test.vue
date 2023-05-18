<template>
  <div @click="handleClick">
    123
  </div>
  <el-button @click="handleClick">123</el-button>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import SnippetModal from '../components/SnippetModal.vue'
export default defineComponent({
  name: 'Test'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const handleClick = () => {
  const formData = reactive({
    userId: '来自父组件，模拟的，默认ID自动生成',
    username: '',
    phone: '',
    department: '',
    role: '',
    remark: ''
  })
  proxy?.$ModalDialog({
    title: '测试标题啦',
    maxHeight: 200,
    renderComponent: {
      data: formData,
      component: SnippetModal
    },
    async onConfirm(instance: any) {
      console.log('formData', formData)
      const isValid = await instance.validationRules()
      console.log('isValid', isValid)
      if (!isValid) {
        return Promise.reject(new Error(''))
      }

      // 调接口 async await
      ElMessage.info('等待3秒')

      return new Promise((resolve) => {
        // mock 等待 resp
        setTimeout(() => {
          ElMessage.success('更新成功！')
          resolve('啦啦啦啦啦啦啦啦啦')
        }, 3000)
      })
    }
  })
}
</script>

<style scoped lang="scss">

</style>