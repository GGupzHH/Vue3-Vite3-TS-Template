// Vue Component Install
import IconFont from 'comps/IconFont/index.vue'

interface GlobelComponents {
  install: Function
}

const component: GlobelComponents = {
  install: function (app: any):void {
    app.component(IconFont.name, IconFont)
  }
}

export default component
