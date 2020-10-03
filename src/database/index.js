import Sequelize from 'sequelize'

import dataBaseConfig from '@config/database'

const sequelize = new Sequelize (
	dataBaseConfig
)

sequelize.authenticate().then(() => {
	console.log ('Database connected..!')
}).catch(() => {
	console.log ('Error while connecting to the database..!')
})

export default sequelize
