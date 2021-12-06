import { GlobalThemeOverrides } from 'naive-ui'

const white = '#ffffff'
const black = '#000000'
const componentBgColor = '#30375a'
const tabColor = 'rgba(255, 255, 255, 0.04)'
const borderColor = 'rgba(255, 255, 255, 0.24)'

const customDarkTheme: GlobalThemeOverrides = {
	common: {
		textColorBase: white,
		primaryColor: '#177ddc',
		primaryColorHover: '#095cb5',
		primaryColorPressed: '#3c9be8',
		bodyColor: '#262c4c',
		baseColor: componentBgColor,
		borderRadius: '5px',
		popoverColor: componentBgColor
	},
	Button: {
		color: componentBgColor,
		colorHover: componentBgColor,
		colorPressed: componentBgColor,
		colorFocus: componentBgColor,
		textColorPrimary: white,
		textColorHoverPrimary: white,
		textColorPressedPrimary: white,
		textColorFocusPrimary: white,
		textColorDisabledPrimary: white,
		textColorInfo: white,
		textColorHoverInfo: white,
		textColorPressedInfo: white,
		textColorFocusInfo: white,
		textColorDisabledInfo: white,
		textColorSuccess: white,
		textColorPressedSuccess: white,
		textColorHoverSuccess: white,
		textColorFocusSuccess: white,
		textColorDisabledSuccess: white,
		textColorWarning: white,
		textColorHoverWarning: white,
		textColorFocusWarning: white,
		textColorPressedWarning: white,
		textColorDisabledWarning: white,
		textColorError: white,
		textColorHoverError: white,
		textColorPressedError: white,
		textColorFocusError: white,
		textColorDisabledError: white
	},
	Tooltip: {
		color: 'rgba(0,0,0,.85)'
	},
	Layout: {
		siderColor: componentBgColor,
		headerColor: 'transparent'
	},
	Menu: {
		itemColorActive: 'rgba(23,125,220,0.25)',
		itemTextColorActive: white,
		itemTextColorHover: 'rgba(255,255,255,.4)'
	},
	Card: {
		colorModal: componentBgColor
	},
	Alert: {
		padding: '8px 40px',
		iconMargin: '5px',
		closeMargin: '10px'
	},
	Drawer: {
		color: componentBgColor
	},
	Cascader: {
		menuColor: componentBgColor
	},
	Checkbox: {
		checkMarkColor: white
	},
	Message: {
		colorInfo: componentBgColor,
		colorError: componentBgColor,
		colorSuccess: componentBgColor,
		colorWarning: componentBgColor,
		colorLoading: componentBgColor
	},
	Descriptions: {
		tdColor: 'transparent',
		tdColorModal: 'transparent',
		borderColor: borderColor,
		borderColorModal: borderColor,
		thColor: tabColor,
		thColorModal: tabColor
	}
}

export default customDarkTheme
