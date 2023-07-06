const component = {
  install: function(app: import('vue').App<any>): void {
    const components = import.meta.glob<DefineComponent>('/src/components/*/index.vue', { eager: true })
    for (const [, component] of Object.entries(components)) {
      app.component(component.default.name, component.default)
    }
  }
}

export default component
