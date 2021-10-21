import { createStore } from 'vuex'

/**
 * plugins mount
 */
// import plugins from '@/store/plugins'
import plugins from 'store/plugins'

/**
 * modules mount
 */
// import DemoTestModule from '@/modules/DemoTest/store'
import DemoTestModule from 'modules/DemoTest/store'
import UserAccount from 'modules/UserAccount/store'
import Project from 'modules/Project/store'
import CreateProject from 'modules/CreateProject/store'
import SummaryModule from 'modules/Summary/store'
import InformationModule from 'modules/Information/store'
import ManuscriptModule from 'modules/Manuscript/store'
import AdminsModule from 'modules/Admins/store'

const store = createStore({
  modules: {
    DemeTest: DemoTestModule,
    UserAccount: UserAccount,
    Project: Project,
    CreateProject: CreateProject,
    Summary: SummaryModule,
    Information: InformationModule,
    Manuscript: ManuscriptModule,
    Admins: AdminsModule
  },
  plugins
})

export default store
