import { App, core } from '@app'

import config from '@config'

core.listen(config.port, () => {
	console.log (config.StartUpMessage)
})
