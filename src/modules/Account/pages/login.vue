<template>
  <div
    class="wrap-login w-100% h-100%"
  >
    <div class="wrap-login__content w-438px h-424px bg-white border-rd-12px absolute top-50% right-100px py-60px px-34px">
      <div class="wrap-title flex flex-items-center">
        <LoginTitleSvg />
        <span class="color-#303133 text-26px pl-12px">欢迎登录</span>
      </div>
      <el-form
        class="mt42px"
        label-position="top"
        label-width="100px"
        :model="userAccount"
      >
        <el-form-item label="邮箱">
          <el-input v-model="userAccount.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="userAccount.password"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-screen py-14px"
            type="primary"
            size="large"
            @click="onSubmit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import LoginTitleSvg from '@/assets/svg/login_title.svg'
export default defineComponent({
  name: 'Login'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const userAccount = reactive({
  name: '',
  password: ''
})

const onSubmit = () => {

}
</script>

<style scoped lang="scss">
.wrap-login {
  background-image: url('/src/assets/svg/login_bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .wrap-login__content {
    transform: translateY(-50%);
    :deep() {
      .el-form {
        .el-form-item__label {
          color: #303133;
          font-size: 14px;
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>
