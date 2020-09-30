import express from 'express'
import expressReactViews from 'express-react-views'

import config from '@config'
import { Routes } from '@routes'

const coreApplication = express()

export class Application {
	constructor () {
		this.drawRoutes()
		this.setUpViewEngine()
	}

	get express () {
		return coreApplication
	}

	drawRoutes () {
		this.express.use('/', Routes)
	}

	setUpViewEngine () {
		this.express.set('views', __dirname + '/views');
		this.express.set('view engine', 'jsx');
		this.express.engine('jsx', 
			expressReactViews.createEngine( config.viewEngine )
		);
	}
}

export const App = (
	new Application
)

export const core = (
	App.express
)
