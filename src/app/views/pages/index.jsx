import React, { useState } from 'react'
import Root from '@layouts'

export default () => {
	const [ name, setName ] = useState('Sam')

	const handleNameChange = ({ target }) => {
		setName (target.value)
	}
	
	return (
		<Root title="Home">
			<input onChange={ handleNameChange } /><br />
			<h1>Hello, World..!</h1> 
			<br />
			<span>
				I am { name }
			</span>
		</Root>
	)
}
