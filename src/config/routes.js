import { Router } from 'express'
import { pages, users } from '@controllers'

const Routes = Router()

Routes.get('/', pages.index)
Routes.post('/users', users.create)

export { Routes }
