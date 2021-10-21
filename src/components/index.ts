// Vue Component Install
import IconFont from 'comps/IconFont/index.vue'
import test from 'modules/test.vue'
console.log(IconFont)
const component = {
  install: function (app: import("vue").App<any>): void {
    console.log(IconFont)
    console.log(test)
    app.component(IconFont.name, IconFont)
  }
}

export default component
