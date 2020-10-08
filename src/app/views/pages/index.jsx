import React, { useState } from 'react'

import { useFormProps } from '@components/formProps'

import User from '@components/User'
import UserList from '@components/UserList'
import UserForm from '@components/UserForm'
import { Header } from '@components/styles'

export default ({ users }) => {
	const [ userFormHiden, setUserFormHiden ] = useState (true)

	const { setFormProps } = useFormProps()

	const handleNewUser = (e) => {
		e.preventDefault ()
		/**
		 * Hide User Form
		 */
		setUserFormHiden (false)
	}

	const handleUserFormHide = (e) => {
		e.preventDefault ()
		/**
		 * Hide User Form
		 */
		setUserFormHiden (true)
	}

	setFormProps ({ handleUserFormHide })

	return (
		<>
			{!userFormHiden &&  <UserForm />}

			<Header>
				<h1>Funcionarios</h1>
			</Header>

			<UserList>
				{ users.length < 1 && <h1>No users..! ):</h1> }
				{ users && users.map (user => (
					<User key={ user.id } datas={ user } />
				))}

				<User>
					<a href="#"onClick={ handleNewUser }>
						New User
					</a>
				</User>
			</UserList>
		</>
	)
}
