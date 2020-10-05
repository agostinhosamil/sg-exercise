import React from 'react'

export default () => (
	<form action="/users" method="post">
		<h1>New user</h1>

		<label>Name&nbsp;</label>
		<input name="user[name]" type="text" />
		<br />
		<label>Email&nbsp;</label>
		<input name="user[email]" type="email" />
		<br />
		<br />
		<input value="Save User" type="submit" />
		<br />
	</form>
)
