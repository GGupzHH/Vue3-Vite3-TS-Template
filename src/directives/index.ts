
const directives = {
  install: function(app: import('vue').App<any>): void {
    const directives = import.meta.glob<DefineComponent>('/src/directives/*/index.ts', { eager: true })
    for (const [, directive] of Object.entries(directives)) {
      app.directive(directive.default.name, directive.default.options)
    }
  }
}

export default directives
