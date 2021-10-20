// Vue Component Install
import IconFont from './IconFont/index.vue'
console.log(IconFont)
const component = {
  install: function (app: import("vue").App<any>): void {
    // console.log(IconFont)
    // app.component(IconFont.name, IconFont)
  }
}

export default component
