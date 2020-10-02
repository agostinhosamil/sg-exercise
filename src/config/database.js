import path from 'path'

export default {
	dialect: 'sqlite',
	storage: path.resolve (__dirname, '..', 'database', 'developent.sqlite')
}
