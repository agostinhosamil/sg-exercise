import React, { useState, useRef } from 'react'

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

	const handleInputPress = (e) => {
		const { keyCode } = e

		if (13 == keyCode) {
			handleClick()
		}
	}

	return (
		<>
			<input ref={ userNameRef } onKeyUp={ handleInputPress } type="text" />
			<br />
			<button onClick={ handleClick }>
				Save User
			</button>
			<ul>
				{ users.map (user => <li key={ user.id }>{ user.name }</li>) }
			</ul>
		</>
	)
}
