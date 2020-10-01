import React, { useState, useRef } from 'react'
import Root from '@layouts'

export default ({ users: defaultUsersList }) => {
	const [ users, setUsers ] = useState (
		defaultUsersList
	)

	const userNameRef = useRef()

	const handleClick = () => {

		setUsers ([ ...users, {
			name: userNameRef.current.value, 
			id: users.length 
		}])

		userNameRef.current.value = ''
	}

	return (
		<Root title="Home">
			<input ref={ userNameRef } type="text" />
			<br />
			<button onClick={ handleClick }>
				Save User
			</button>
			<ul>
				{ users.map (user => <li key={ user.id }>{ user.name }</li>) }
			</ul>
		</Root>
	)
}
