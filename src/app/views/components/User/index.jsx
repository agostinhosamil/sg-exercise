import React from 'react'

import { 
	Container, 
	GravatarContainer, 
	UserDatasContainer,
	UserOptionsContainer,
	Name, 
	Position 
} from './styles'

import UserGravatar from '@components/UserGravatar'

export default ({ datas, children }) => {

	const Children = () => (
		<div>
			<GravatarContainer>
				<UserGravatar user={ datas } />
			</GravatarContainer>
			<UserDatasContainer>
				<Name>{ datas.name }</Name>
				<Position>DEV</Position>
			</UserDatasContainer>
			<UserOptionsContainer>
				MNa
			</UserOptionsContainer>
		</div>
	)

	return (
		<Container>
			{ children || <Children /> }
		</Container>
	)
}
