import express from 'express'

import { Routes } from '@routes'

const coreApplication = express()

export class Application {
	constructor () {
		this.drawRoutes()
	}

	get express () {
		return coreApplication
	}

	drawRoutes () {
		this.express.use('/', Routes)
	}
}

export const App = (
	new Application
)

export const core = (
	App.express
)
