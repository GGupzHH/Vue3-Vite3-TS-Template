import router from './index'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})
console.log(router)

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  // if (
  //   allowlist.find(
  //     name => to.name === name
  //   )
  // ) {
  //   // return
  // }
  next()
})

router.afterEach((to) => {
  NProgress.done()
  // eslint-disable-next-line no-undef
  // if (_hmt) {
  //   if (to.path) {
  //     // eslint-disable-next-line no-undef
  //     _hmt.push(['_trackPageview', to.fullPath])
  //   }
  // }
})
