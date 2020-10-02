import path from 'path'
import * as fs from 'fs'

const dirFiles = fs.readdirSync(__dirname)

for (let i = 0; i < dirFiles.length; i++) {
	if (dirFiles [ i ] !== 'index.js') {
		let modelName = dirFiles[ i ].replace (
			/\s+\.js$/i, ''
		)
		let modelCore = require (
			path.resolve( __dirname, dirFiles[ i ] )
		)

		if ( modelCore.default.init ) {
			let Schemas = require ('@database/scehma')

			let modelSchema = Schemas[ modelName.toLowerCase() ]

			if (typeof undefined !== typeof modelSchema) {
				modelCore.default.init (modelSchema, { 
					modelName: modelName.toLowerCase()
				})
			}
			
		}
		
		exports[ modelName ] = (
			// Instance of the model 
			// core class inside its file
			modelCore.default
		)
	}
}
