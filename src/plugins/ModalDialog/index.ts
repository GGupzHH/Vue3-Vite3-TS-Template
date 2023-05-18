import { App, createVNode, render, nextTick, Component, VNode } from 'vue'
import Modal from '@/plugins/ModalDialog/modal.vue'
import { ModalDialogOptions, renderComponent } from '../types'
import WarningDialogVue from '@/plugins/ModalDialog/WarningDialog.vue'

const extractData = (options: { renderComponent: renderComponent; }) => {
  const extractSlotComponents = (renderComponent: renderComponent) => {
    const component: Record<string, Component> = {}
    let componentData: any = {}

    if (renderComponent) {
      const { data } = renderComponent
      componentData = data
      // 删除弹框不需要再引入组件
      if (renderComponent.component?.name) {
        component[renderComponent.component.name as string] = renderComponent.component
      }
    }

    return {
      component,
      componentData
    }
  }

  const { component, componentData } = extractSlotComponents(options.renderComponent)
  return {
    component,
    componentData
  }
}

export default {
  install(app: App<any>) {
    // FIXME 这里的小部件可以再多套一层 这样类型好定义
    app.config.globalProperties.$ModalDialog = function(options: ModalDialogOptions) {
      const {
        component,
        componentData
      } = extractData(options)

      const vm: VNode = createVNode(
        Modal,
        {
          ...options,
          componentData,
          components: component
        }
      )
      for (const name in component) {
        app.component(name, component[name])
      }

      let container: any = document.createElement('div')
      // FIXME 组件销毁 有问题
      vm.destroy = () => {
        if (container) render(null, container)
        container = null
        // vm = null
        for (const name in component) {
          delete app._context.components[name]
        }
      }

      vm.appContext = app._context
      render(vm, container)
      document.body.appendChild(container.firstElementChild)

      nextTick(() => {
        const proxy = vm.component?.proxy
        proxy && (proxy.visible = true)
      })

      return vm
    }
  }
}
