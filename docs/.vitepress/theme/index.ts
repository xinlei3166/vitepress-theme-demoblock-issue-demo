import Theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'
import 'vxe-table/lib/style.css'
import GenderRadio from '../../../src/components/commons/GenderRadio/src/GenderRadio.vue'
import { MyTable } from '../../../src/components/commons/MyTable'
import { FormWrapper } from '../../../src/components/commons/FormWrapper'
import { Status } from '../../../src/components/commons/Status'
import naive from 'naive-ui'
import VXETable from 'vxe-table'
import 'xe-utils'
import { setupVxeTableConfig } from '../../../src/config/tableConfig'
import '../../../src/assets/css/iconfont.less'

export default {
	...Theme,
	enhanceApp({ app }) {
		app.use(naive)
		app.use(VXETable)
		setupVxeTableConfig()
		app.component('GenderRadio', GenderRadio)
		app.component('MyTable', MyTable)
		app.component('FormWrapper', FormWrapper)
		app.component('Status', Status)
		registerComponents(app)
	}
}
