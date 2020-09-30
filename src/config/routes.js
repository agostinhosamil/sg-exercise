import { Router } from 'express'

const Routes = Router()

Routes.get('/', (req, res) => {
	res.end ('Hello, Worlds..!')
})


export { Routes }
