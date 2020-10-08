import React from 'react'

import { useFormProps } from '@components/formProps'
import { Container, Title, Label, Input, OptionButton } from './styles'

export default (props) => {

	const { handleUserFormHide } = useFormProps()

	return (
		<Container>
			<form action="/users" method="post">
				<Title>New user</Title>

				<Label>Name</Label>
				<Input name="user[name]" type="text" />
				<br />
				<Label>Email</Label>
				<Input name="user[email]" type="email" />
				<br />
				<br />
				<Input value="Save User" type="submit" /> 
				<OptionButton onClick={ handleUserFormHide } href="#">
					Cancelar
				</OptionButton>
				<br />
			</form>
		</Container>
	)
}
