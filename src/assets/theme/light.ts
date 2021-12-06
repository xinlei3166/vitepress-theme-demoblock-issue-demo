import { GlobalThemeOverrides } from 'naive-ui'

const white = '#ffffff'
const black = '#000000'

const customLightTheme: GlobalThemeOverrides = {
	common: {
		primaryColor: '#3B8AFF',
		primaryColorHover: '#40a9ff',
		primaryColorPressed: '#096dd9',
		bodyColor: '#EAEFF3',
		baseColor: white,
		borderRadius: '5px'
	},
	Layout: {
		headerColor: 'transparent',
	},
	Button: {
		color: white,
		colorHover: white,
		colorPressed: white,
		colorFocus: white
	},
	Menu: {
		itemColorActive: 'rgba(59,138,255,0.1)'
	},
	Alert: {
		padding: '8px 40px',
		iconMargin: '5px',
		closeMargin: '10px'
	}
}

export default customLightTheme