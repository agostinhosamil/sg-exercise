import React, { useState } from 'react'
import Root from '@layouts'

import styled from 'styled-components'

const Text = styled.h1`
	color: red
`

export default () => {
	const [ name, setName ] = useState('Sam')

	const handleNameChange = ({ target }) => {
		setName (target.value)
	}
	
	return (
		<Root title="Home">
			<input onChange={ handleNameChange } /><br />
			<Text>Hello, World..! { name.toLowerCase() } </Text>
			<br />
			<span>
				I am { name }
			</span>
		</Root>
	)
}
