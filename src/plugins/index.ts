import { App } from 'vue'
import ModalDialog from '@/plugins/ModalDialog'

export default {
  install(app: App<any>) {
    app.use(ModalDialog)
  }
}

