import { VxeGridPropTypes, VxeTablePropTypes } from 'vxe-table'

export interface MyTableOptions {
	rowId?: VxeTablePropTypes.RowId
	stripe?: VxeTablePropTypes.Stripe
	columns: VxeGridPropTypes.Columns
	formConfig: VxeGridPropTypes.FormConfig
	proxyConfig: VxeGridPropTypes.ProxyConfig
	treeConfig?: VxeTablePropTypes.TreeConfig
}