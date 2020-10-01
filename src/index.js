import { App, core } from '@app'

import register from '@react-ssr/express/register'
import config from '@config'

(async () => {

	await register (core);

	core.listen(config.port, () => {
		console.log (config.StartUpMessage)
	})
})()
