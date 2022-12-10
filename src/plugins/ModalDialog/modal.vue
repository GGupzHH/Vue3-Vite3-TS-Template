<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :show-close="false"
    :width="dialogWidth"
    :custom-class="getDialogClassName"
    v-bind="getOriginAttrs()"
    @closed="handleRealClosed"
  >
    <template
      #title
    >
      <IconFont
        v-if="headerIcon"
        :icon="headerIcon"
        class="modal-header__icon"
        :class="{ waringIcon: headerIconWarn, saveIcon: headerIconSave }"
      />
      <span
        class="modal-header__title"
      >{{ title }}</span>
    </template>
    <div
      v-loading="fullLoading"
      class="modal-container__body"
    >
      <div
        class="modal-box__inner"
        :class="{
          'show-border-radius': hideFooter
        }"
        :style="{
          maxHeight: `${isNumberical(maxHeight) ? maxHeight + 'px': maxHeight }`,
          height: `${isNumberical(height) ? height + 'px': height }`
        }"
      >
        <div
          v-if="renderHTML"
          class="modal-container__html"
          v-html="renderHTML"
        ></div>
        <!-- {{ renderHTML }} -->
        <component
          :is="getComponent"
          ref="refComponent"
          v-model="componantData"
          class="modal-container__component"
          :class="{
            'hide-padding': hidePadding
          }"
        />
      </div>
      <div
        v-if="!hideFooter"
        class="modal-container__footer"
      >
        <el-button
          :type="deleteType ? 'danger' : 'primary'"
          @click="handleConfirm()"
        >
          {{ confirmText || '确定' }}
        </el-button>
        <el-button
          plain
          @click="handleCancel()"
        >
          取消
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { isNumberical } from '@/utils/type'
import {
  defineComponent,
  getCurrentInstance,
  ref,
  computed,
  reactive
} from 'vue'

export default defineComponent({
  name: 'ModalDialog',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ''
    },
    headerDescText: {
      type: String,
      default: ''
    },
    headerIcon: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    height: {
      type: [Number, String],
      default: 'auto'
    },
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },
    dialogWidth: {
      type: String,
      default: '500px'
    },
    disabledConfirmButton: {
      type: Boolean,
      default: false
    },
    hidePadding: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    renderHTML: {
      type: String,
      default: ''
    },
    componantData: {
      type: Object,
      default() {
        return {}
      }
    },
    headerIconWarn: {
      type: Boolean,
      default: false
    },
    deleteType: {
      type: Boolean,
      default: false
    },
    headerIconSave: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }: { attrs: any; }) {
    const { proxy } = getCurrentInstance() as any
    const visible = ref(false)

    const getDialogClassName = computed(() => {
      const classNames = 'modal-wrapper-containers-dialog'
      return classNames
    })

    const getComponent = computed(() => {
      const keys = Object.keys(attrs.components)
      const name = keys[0]
      return name
    })

    const refComponent = ref(null)
    const handleCancel = () => {
      visible.value = false
    }
    const handleConfirm = async() => {
      const instance = refComponent.value
      try {
        await attrs.onConfirm(instance, proxy)
        visible.value = false
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.dir(error)
        }
      }
    }

    const handleRealClosed = () => {
      proxy.$.vnode.destroy()
    }

    const fullLoading = ref(false)

    const getOriginAttrs = () => {
      const filterList = [
        'onConfirm',
        'onCancel',
        'renderComponent',
        'renderHTML',
        'components'
      ]
      const resultAttrs = reactive({} as any)
      Object.keys(attrs)
        .filter(
          (attrKey) => !filterList.includes(attrKey)
        ).forEach(
          (attrKey) => {
            resultAttrs[attrKey] = attrs[attrKey]
          }
        )
      return resultAttrs
    }

    return {
      visible,
      getDialogClassName,
      getComponent,
      fullLoading,
      refComponent,

      isNumberical,
      handleCancel,
      handleConfirm,
      getOriginAttrs,

      handleRealClosed
    }
  }
})
</script>

<style lang="scss" scoped>

:deep() {
  .modal-container__html {
    padding: 24px;
  }
  .modal-container__component {
    padding: 24px;
    &.hide-padding {
      padding: 0;
    }
    .el-textarea__inner,
    .el-input__inner  {
      padding: 8px;
    }
  }
  .modal-container__footer {
      height: 54px;
      line-height: 54px;
      text-align: right;
      padding-right: 24px;
      border-top: 1px solid #DCDFE6FF;
  }
  .modal-box__inner {
    overflow-y: auto;
    &.show-border-radius {
      border-radius: 8px;
    }
  }
}
</style>
<style lang="scss">
.modal-wrapper-containers-dialog {
  border-radius: 8px;
  .el-dialog__header {
    display: flex;
    align-items: center;
    height: 54px;
    border-bottom: 1px solid #DCDFE6FF;
    .modal-header__icon {
      width: 20px;
      height: 20px;
    }
    .waringIcon {
      color: #FAAD14
    }
    .saveIcon {
      color: #1679D9
    }
    .modal-header__title {
      margin-left: 8px;
      font-size: 18px;
      font-weight: 500;
      color: #303133;
    }
    .header-desc {
      display: flex;
      align-items: center;
      svg {
        height: 17px;
      }
    }
  }
  .el-dialog__body {
    padding: 0;
  }
}
</style>
