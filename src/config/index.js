import package from '~r/package.json'

const configKeysRe = /^(@|app(lication)?_)/i
const appConfig = package.ApplicationConfigurations || {
	port: null
}


for (let key in package) {
	if (configKeysRe.test(key)) {
		let appConfigProp = key.replace (configKeysRe, '')

		appConfig[ appConfigProp ] = (
			package [ key ]
		)
	}
}

export default appConfig
