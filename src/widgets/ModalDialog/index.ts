import { App, createVNode, render, nextTick } from 'vue'
import Modal from '@/widgets/ModalDialog/modal.vue'

const extractData = (options: { renderComponent: any; }) => {
  const extractSlotComponents = (renderComponent: any) => {
    const component: any = {}
    let componantData = {}

    if (renderComponent) {
      const { data } = renderComponent
      componantData = data
      component[renderComponent.component.name] = renderComponent.component
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
  install (app: App<any>) {
    app.config.globalProperties.$ModalDialog = function (options: any) {
      const {
        component,
        componantData
      } = extractData(options)

      let vm: any = createVNode(
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
      vm.destroy = () => {
        if (container) render(null, container)
        container = null
        vm = null
        for (const name in component) {
          delete app._context.components[name]
        }
      }
      vm.appContext = app._context
      render(vm, container)
      document.body.appendChild(container.firstElementChild)

      nextTick(() => {
        vm.component.proxy.visible = true
      })

      return vm
    }
  }
}
