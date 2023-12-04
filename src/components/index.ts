import ElIcon from './ElIcons'

const component = {
  install: function(app: import('vue').App<any>): void {
    const components = import.meta.glob<DefineComponent>('/src/components/*/index.ts', { eager: true })
    for (const [, component] of Object.entries(components)) {
      app.component(component.default.name, component.default)
    }

    app.use(ElIcon)
  }
}

export default component
