<template>
  <el-form
    ref="refForm"
    class="create-user-container"
    label-position="top"
    label-width="100px"
    :rules="rules"
    :model="formData"
  >
    <el-form-item
      label="用户ID"
      prop="userId"
    >
      <el-input
        v-model="formData.userId"
        placeholder="请输入"
      />
    </el-form-item>
    <el-form-item
      label="用户名"
      prop="username"
    >
      <el-input
        v-model="formData.username"
        placeholder="请输入"
      />
    </el-form-item>
    <el-form-item
      label="手机号码"
      prop="phone"
    >
      <el-input
        v-model="formData.phone"
        placeholder="请输入"
      />
    </el-form-item>
    <el-form-item
      label="所属科室"
      prop="department"
    >
      <el-select
        v-model="formData.department"
        placeholder="请选择科室"
      >
        <el-option
          label="科室1"
          value="keshi1"
        />
        <el-option
          label="科室2"
          value="keshi2"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      label="所属角色"
      prop="role"
    >
      <el-select
        v-model="formData.role"
        placeholder="请选择角色"
      >
        <el-option
          label="角色1"
          value="juese1"
        />
        <el-option
          label="角色2"
          value="juese2"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      label="备注"
      prop="remark"
    >
      <el-input
        v-model="formData.remark"
        placeholder="请输入"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'CreateUser',
  setup() {
    const refForm = ref<typeof ElForm>()
    const validationRules = async() => {
      return new Promise((resolve) => {
        if (!refForm.value) return
        refForm.value.validate(async(valid: boolean) => {
          if (valid) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }

    const formData = reactive({
      userId: '',
      username: '',
      phone: '',
      department: '',
      role: '',
      remark: ''
    })

    const rules = reactive({
      userId: [
        {
          required: true,
          message: '请输入内容',
          trigger: 'change'
        }
      ],
      username: [
        {
          required: true,
          message: '请输入内容',
          trigger: 'change'
        }
      ]
    })
    return {
      formData,
      rules,

      refForm,
      validationRules
    }
  }
})

</script>

<style lang="scss" scoped>
.create-user-container {
  :deep() {
    .el-select {
      width: 100%
    }
  }
}
</style>
