import Sequelize from 'sequelize'

import dataBaseConfig from '@config/database'

const sequelize = new Sequelize (
	dataBaseConfig
)

sequelize.authenticate().then(() => {
	console.log ('Database connected..!')
}).catch(error => {
	console.log (
		`Error while connecting to the database..! \n ${ error }`
	)
})

export default sequelize
