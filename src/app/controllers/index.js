import * as path from 'path'
import * as fs from 'fs'

const dirFiles = fs.readdirSync(__dirname)

for (let i = 0; i < dirFiles.length; i++) {
	if (dirFiles [ i ] !== 'index.js') {
		let controllerName = dirFiles[ i ].replace (
			/\.js$/i, ''
		)
		let controllerCore = require (
			path.resolve( __dirname, dirFiles[ i ] )
		)
		
		exports[ controllerName ] = new controllerCore.default
	}
}
