import express from 'express'
import bodyParser from 'body-parser'

import config from '@config'
import { Routes } from '@routes'

const coreApplication = express()

export class Application {
	constructor () {
		this.middlewares()
		this.drawRoutes()
	}

	get express () {
		return coreApplication
	}

	middlewares () {
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded())
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
