import path from 'path'
import * as fs from 'fs'

const dirFiles = fs.readdirSync(__dirname)

import dataBaseConfig from '@config/database'

for (let i = 0; i < dirFiles.length; i++) {
	if (dirFiles [ i ] !== 'index.js') {
		let modelName = dirFiles[ i ].replace (
			/\s+\.js$/i, ''
		)
		let modelCore = require (
			path.resolve( __dirname, dirFiles[ i ] )
		)
		
		exports[ modelName ] = (
			// Instance of the model 
			// core class inside its file
			modelCore.default
		)
	}
}
