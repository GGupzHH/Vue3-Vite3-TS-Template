import { App, createVNode, render, nextTick, Component, VNode, ComponentPublicInstanceCostom } from 'vue'
import Modal from '@/plugins/ModalDialog/modal.vue'
import { ModalDialogOptions, renderComponent } from '../types'

const extractData = (options: { renderComponent: renderComponent; }) => {
  const extractSlotComponents = (renderComponent: renderComponent) => {
    const component: Record<string, Component> = {}
    let componantData: any = {}

    if (renderComponent) {
      const { data } = renderComponent
      componantData = data
      component[renderComponent.component.name as string] = renderComponent.component
    }

    return {
      component,
      componantData
    }
  }

  const { component, componantData } = extractSlotComponents(options.renderComponent)
  return {
    component,
    componantData
  }
}

export default {
  install(app: App<any>) {
    // FIXME 这里的小部件可以再多套一层 这样类型好定义
    app.config.globalProperties.$ModalDialog = function(options: ModalDialogOptions) {
      const {
        component,
        componantData
      } = extractData(options)

      const vm: VNode = createVNode(
        Modal,
        {
          ...options,
          componantData,
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
        const proxy = vm.component?.proxy as ComponentPublicInstanceCostom
        proxy.visible = true
      })

      return vm
    }
  }
}
