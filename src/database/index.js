import Sequelize from 'sequelize'

import dataBaseConfig from '@config/database'

const sequelize = new Sequelize (
	dataBaseConfig
)

export default sequelize
