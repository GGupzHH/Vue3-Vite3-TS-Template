import { App } from 'vue'
import ModalDialog from '@/widgets/ModalDialog'

export default {
  install(app: App<any>) {
    app.use(ModalDialog)
  }
}

