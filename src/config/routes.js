import { Router } from 'express'
import { pages } from '@controllers'

const Routes = Router()

Routes.get('/', pages.index)

export { Routes }
