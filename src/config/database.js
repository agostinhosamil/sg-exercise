const path = require ('path')

module.exports = {
	username: null,
  password: null,
  database: "main",
  host: "localhost",
	dialect: 'sqlite',
	storage: path.resolve (__dirname, '..', 'database', 'development.sqlite'),

	define: {
		timestamps: true
	}
}
