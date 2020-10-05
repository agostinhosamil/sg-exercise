import React, { useState } from 'react'

import User from '@components/User'
import UserForm from '@components/UserForm'

export default ({ users }) => {
	return (
		<>
			<UserForm />

			{ users.length < 1 && <h1>No users..! ):</h1> }
			<ul>
				{ users && users.map (user => (
					<User key={ user.id } datas={ user } />
				))}
			</ul>
		</>
	)
}
