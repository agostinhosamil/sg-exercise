import React, { useState } from 'react'

import User from './_user'
import UserForm from './_userForm'

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
